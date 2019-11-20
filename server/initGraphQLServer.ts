import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import schema from './schema';
import { NODE_ENV, CUSTOM_ENV } from './config/config';

const apolloServer = new ApolloServer({
  schema,
  introspection: NODE_ENV !== 'production' && CUSTOM_ENV !== 'production',
  validationRules: [depthLimit(10)],
});

export default apolloServer;
