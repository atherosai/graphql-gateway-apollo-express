import express from "express";
import helmet from "helmet";
import { PORT } from "./config/config";
import apolloServer from "./initGraphQLServer";
import { httpsRedirect, wwwRedirect } from "./lib/http-redirect";


const { NODE_ENV } = process.env;
const app = express();

app.enable('trust proxy')
app.use(helmet());

// redirects should be ideally setup in reverse proxy
if (NODE_ENV === 'production') {

  app.use('/*', httpsRedirect());

  app.get('/*', wwwRedirect());

}

// GraphQL server setup
apolloServer.applyMiddleware({ app, path: "/graphql" });

app.listen(PORT, () => {
  console.info(`\n\nExpress listen at http://localhost:${PORT} \n`);
});
