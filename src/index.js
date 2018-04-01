import 'babel-polyfill';
import express from 'express';
import dotenv from 'dotenv';

import scaffoldMiddleware from './middleware';
import scaffoldRoutes from './routes';

dotenv.config();
const { DB_HOST, PORT } = process.env;

const app = express();
scaffoldMiddleware(app, DB_HOST);
scaffoldRoutes(app);

const port = PORT || 7000;
app.listen(port, () => console.log(`Listening on port ${port}`));
