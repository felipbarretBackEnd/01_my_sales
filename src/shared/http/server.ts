import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';

import routes from './routes';
import ErrorHandleMiddleware from '@shared/middlewares/ErrorHandleMiddleware';
import { AppDataSource } from '@shared/typeorm/data-source';
import { error } from 'console';

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use(routes);
    app.use(ErrorHandleMiddleware.handleError);

    console.log('Connected to the database! 🥳🎉')

app.listen(3333, () => {
  console.log('Server is startes on port 3333! 🏆')
})
  }).catch(error => {
    console.error('Failed fo connect to the database', error)
  })


