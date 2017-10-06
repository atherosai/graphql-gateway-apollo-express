import {
  GraphQLScalarType,
} from 'graphql';

import { isISO8601 } from 'validator';

const parseISO8601 = (value) => {
  if (isISO8601(value)) {
    return value;
  }
  throw new Error('DateTime cannot represent an invalid ISO-8601 Date instance');
};


const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'An ISO-8601 encoded UTC date string.',
  serialize: parseISO8601,
  parseValue: parseISO8601,
  parseLiteral(ast) {
    if (isISO8601(ast.value)) {
      return ast.value;
    }
    throw new Error('DateTime cannot represent an invalid ISO-8601 Date instance');
  },
});

export {
  DateTime as default,
};
