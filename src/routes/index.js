import { Router } from 'express';

import apiRoutes from './api';

const scaffoldRoutes = (app) => {
  app.use('/api', apiRoutes);

  app.get('/healthz', async (req, res) => {
    const { db } = req;
    try {
      await db.authenticate();
      res.status(200).send('OK');
    } catch (e) {
      res.status(400).send('Health check failed: Error connecting to db');
    }
  });
};

export default scaffoldRoutes;
