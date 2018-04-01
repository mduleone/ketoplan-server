import bodyParser from 'body-parser';

import dbFactory from '../db';

const scaffoldMiddleware = (app, dbHost) => {
  // DB scaffold
  const { db, models } = dbFactory(dbHost);
  app.use((req, res, next) => {
    req.db = db;
    req.models = models;
    next();
  });

  // Body Parsing
  app.use(bodyParser.json({type: '*/*'}));
  app.use(bodyParser.urlencoded({ extended: true }));

  // Logging
  app.use((req, res, next) => {
    next();
    console.log(req.method, req.originalUrl);
  });
};

export default scaffoldMiddleware;
