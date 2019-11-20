import { config } from 'dotenv';
import path from 'path';

export const { NODE_ENV, CUSTOM_ENV } = process.env;

if (!NODE_ENV) throw new Error('NODE_ENV is not defined');
if (!CUSTOM_ENV) throw new Error('CUSTOM_ENV is not defined');

const DIR = path.resolve(__dirname, NODE_ENV === 'production' ? '../../..' : '../..');

// secrets should decrypted/encrypted with some the vault solutions

config({
  path: `${DIR}/secrets/${NODE_ENV}-${CUSTOM_ENV}.env`,
});


export const { PORT } = process.env;
