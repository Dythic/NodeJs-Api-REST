import type { FastifyInstance } from 'fastify';
import { usersRoutes } from '../../modules/users/routes';
import { categoriesRoutes } from '../../modules/categories/routes';
import { votesRoutes } from '../../modules/votes/routes';

export async function registerRoutes(app: FastifyInstance) {
  await app.register(usersRoutes, { prefix: '/api/users' });
  await app.register(categoriesRoutes, { prefix: '/api/categories' });
  await app.register(votesRoutes, { prefix: '/api' });
}
