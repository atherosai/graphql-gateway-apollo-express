import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { printSchema } from 'graphql';
import schema from './graphql/schema';

const app = express();
const PORT = 3000;
const dev = process.env.NODE_ENV === 'development';

// app.use('/', (req, res) => {
//   res.json('Go to /graphiql to test your queries and mutations!');
// });
console.log(printSchema(schema));
const apolloServer = new ApolloServer({
  schema,
  playground: dev,
});

apolloServer.applyMiddleware({ app, path: '/graphql' });


app.listen(PORT, () => {
  console.info(`\n\nExpress listen at http://localhost:${PORT} \n`);
});
