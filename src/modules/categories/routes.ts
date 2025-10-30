import type { FastifyInstance } from 'fastify';
import { categoriesController } from './controller';

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/', categoriesController.list as any);
  app.get('/:id/games', categoriesController.games as any);
}
