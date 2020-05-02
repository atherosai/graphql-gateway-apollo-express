
import { GraphQLScalarType } from 'graphql';

import isISO8601 from 'validator/lib/isISO8601';

// This is only very simple DateTime scalar to show how to create your custom scalars.
// You can use some of the libraries for production use cases.

const parseISO8601 = (value: any) => {
  if (isISO8601(value)) {
    return value;
  }
  throw new Error('DateTime cannot represent an invalid ISO-8601 Date string');
};

const serializeISO8601 = (value: any) => {
  if (isISO8601(value)) {
    return value;
  }
  throw new Error('DateTime cannot represent an invalid ISO-8601 Date string');
};

const parseLiteralISO8601 = (ast: any) => {
  if (isISO8601(ast.value)) {
    return ast.value;
  }
  throw new Error('DateTime cannot represent an invalid ISO-8601 Date string');
};

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'An ISO-8601 encoded UTC date string.',
  serialize: serializeISO8601,
  parseValue: parseISO8601,
  parseLiteral: parseLiteralISO8601,
});

export default DateTime;
