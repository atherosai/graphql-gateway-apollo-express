import { printSchema } from 'graphql/utilities';
import fs from 'fs';
import path from 'path';
import schema from '@gateway/index';

fs.writeFile(path.join(__dirname, '/../schema/sdl-schema.graphql'), printSchema(schema), (err) => {
  if (err) {
    throw Error('Generating SDL schema was not successful');
  }

  // eslint-disable-next-line no-console
  console.info('The schema was saved!');
});
