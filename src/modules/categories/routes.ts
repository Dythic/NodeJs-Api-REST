import type { FastifyInstance } from 'fastify';
import { categoriesController } from './controller.js';

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/', categoriesController.list as any);
  app.get('/:id/games', categoriesController.games as any);
  app.post('/', { preHandler: [(app as any).requireAdmin] }, categoriesController.create as any);
  app.put('/:id', { preHandler: [(app as any).requireAdmin] }, categoriesController.update as any);
  app.delete('/:id', { preHandler: [(app as any).requireAdmin] }, categoriesController.delete as any);
}
