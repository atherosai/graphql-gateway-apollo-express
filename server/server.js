import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';

const app = express();
const PORT = 3000;
const dev = process.env.NODE_ENV === 'development';

const apolloServer = new ApolloServer({
  schema,
  playground: dev,
  engine: false,
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT, () => {
  console.info(`\n\nExpress listen at http://localhost:${PORT} \n`);
});
