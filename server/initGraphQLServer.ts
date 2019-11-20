import { ApolloServer } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import depthLimit from 'graphql-depth-limit';
import queryComplexity, {
  simpleEstimator,
} from 'graphql-query-complexity';
import schema from './schema';
import { NODE_ENV, CUSTOM_ENV } from './config/config';

const queryComplexityRule = queryComplexity({
  maximumComplexity: 1000,
  variables: {},
  // eslint-disable-next-line no-console
  createError: (max: number, actual: number) => new GraphQLError(`Query is too complex: ${actual}. Maximum allowed complexity: ${max}`),
  estimators: [
    simpleEstimator({
      defaultComplexity: 1,
    }),
  ],
});


const apolloServer = new ApolloServer({
  schema,
  introspection: NODE_ENV !== 'production' && CUSTOM_ENV !== 'production',
  validationRules: [depthLimit(7), queryComplexityRule],
});

export default apolloServer;
