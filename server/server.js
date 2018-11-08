import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { printSchema } from 'graphql/utilities';
import schema from './schema';

console.log('printschema', printSchema(schema));
const app = express();
const PORT = 3000;
const dev = process.env.NODE_ENV === 'development';

const apolloServer = new ApolloServer({
  schema,
  playground: dev,
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT, () => {
  console.info(`\n\nExpress listen at http://localhost:${PORT} \n`);
});
