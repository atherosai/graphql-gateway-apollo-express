'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;
exports.createSourceEventStream = createSourceEventStream;

var _iterall = require('iterall');

var _execute = require('../execution/execute');

var _schema = require('../type/schema');

var _invariant = require('../jsutils/invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _mapAsyncIterator = require('./mapAsyncIterator');

var _mapAsyncIterator2 = _interopRequireDefault(_mapAsyncIterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Implements the "Subscribe" algorithm described in the GraphQL specification.
 *
 * Returns an AsyncIterator
 *
 * If the arguments to this function do not result in a legal execution context,
 * a GraphQLError will be thrown immediately explaining the invalid input.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */

/* eslint-disable no-redeclare */
function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  // Extract arguments from object args if provided.
  var args = arguments.length === 1 ? argsOrSchema : undefined;
  var schema = args ? args.schema : argsOrSchema;
  return args ? subscribeImpl(schema, args.document, args.rootValue, args.contextValue, args.variableValues, args.operationName, args.fieldResolver, args.subscribeFieldResolver) : subscribeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver);
} /**
   * Copyright (c) 2017, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

function subscribeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  var subscription = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver);

  // For each payload yielded from a subscription, map it over the normal
  // GraphQL `execute` function, with `payload` as the rootValue.
  // This implements the "MapSourceToResponseEvent" algorithm described in
  // the GraphQL specification. The `execute` function provides the
  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
  // "ExecuteQuery" algorithm, for which `execute` is also used.
  return (0, _mapAsyncIterator2.default)(subscription, function (payload) {
    return (0, _execute.execute)(schema, document, payload, contextValue, variableValues, operationName, fieldResolver);
  });
}

/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns an AsyncIterable, may through a GraphQLError.
 *
 * A Source Stream represents the sequence of events, each of which is
 * expected to be used to trigger a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */
function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrect, throw an error.
  (0, _execute.assertValidExecutionArguments)(schema, document, variableValues);

  // If a valid context cannot be created due to incorrect arguments,
  // this will throw an error.
  var exeContext = (0, _execute.buildExecutionContext)(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);

  var type = (0, _execute.getOperationRootType)(schema, exeContext.operation);
  var fields = (0, _execute.collectFields)(exeContext, type, exeContext.operation.selectionSet, Object.create(null), Object.create(null));
  var responseNames = Object.keys(fields);
  var responseName = responseNames[0];
  var fieldNodes = fields[responseName];
  var fieldNode = fieldNodes[0];
  var fieldDef = (0, _execute.getFieldDef)(schema, type, fieldNode.name.value);
  (0, _invariant2.default)(fieldDef, 'This subscription is not defined by the schema.');

  // Call the `subscribe()` resolver or the default resolver to produce an
  // AsyncIterable yielding raw payloads.
  var resolveFn = fieldDef.subscribe || exeContext.fieldResolver;

  var info = (0, _execute.buildResolveInfo)(exeContext, fieldDef, fieldNodes, type, (0, _execute.addPath)(undefined, responseName));

  // resolveFieldValueOrError implements the "ResolveFieldEventStream"
  // algorithm from GraphQL specification. It differs from
  // "ResolveFieldValue" due to providing a different `resolveFn`.
  var subscription = (0, _execute.resolveFieldValueOrError)(exeContext, fieldDef, fieldNodes, resolveFn, rootValue, info);

  if (subscription instanceof Error) {
    throw subscription;
  }

  if (!(0, _iterall.isAsyncIterable)(subscription)) {
    throw new Error('Subscription must return Async Iterable. ' + 'Received: ' + String(subscription));
  }

  return subscription;
}