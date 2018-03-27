const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`listening on port ${port}`));
