import 'babel-polyfill';
import express from 'express';
import dotenv from 'dotenv';
import dbFactory from './db';

dotenv.config();

const db = dbFactory(process.env.DB_HOST);

const app = express();

app.get('/', async (req, res) => {
  try {
    await db.authenticate();
    res.status(200).send('Successfully connected to db');
  } catch (e) {
    res.status(400).send('Error connecting to db');
  }
});

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`listening on port ${port}`));
