import type { FastifyInstance } from 'fastify';
import { usersController } from './controller.js';

export async function usersRoutes(app: FastifyInstance) {
  app.post('/', usersController.register);
  app.post('/login', usersController.login);
  app.get('/me', { preHandler: [(app as any).authenticate] }, usersController.me as any);
  app.put('/me', { preHandler: [(app as any).authenticate] }, usersController.updateMe as any);
  app.delete('/me', { preHandler: [(app as any).authenticate] }, usersController.deleteMe as any);
}
