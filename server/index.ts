import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { PORT, NODE_ENV } from './config/config';
import apolloServer from './initGraphQLServer';
import { httpsRedirect, wwwRedirect } from './lib/http-redirect';

const app = express();

app.enable('trust proxy');
app.use(helmet());

// redirects should be ideally setup in reverse proxy like nignx
if (NODE_ENV === 'production') {
  app.use('/*', httpsRedirect());

  app.get('/*', wwwRedirect());

  app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }));
}

// GraphQL server setup
apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`\n\nExpress listen at http://localhost:${PORT} \n`);
});
