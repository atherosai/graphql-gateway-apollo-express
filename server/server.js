import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'apollo-server-express';

import bodyParser from 'body-parser';
import schema from './graphql/schema';

const app = express();
const PORT = 3000;
const dev = process.env.NODE_ENV === 'development';

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

if (dev) {
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));
}

app.use('/', (req, res) => {
  res.json('Go to /graphiql to test your queries and mutations!');
});

app.listen(PORT, () => {
  console.info(`\n\nExpress listen at http://localhost:${PORT} \n`);
});
