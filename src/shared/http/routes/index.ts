import { Router } from 'express';
import { request } from 'http';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ message: 'Hello Dev! I am Alive! '});
});

export default routes;
