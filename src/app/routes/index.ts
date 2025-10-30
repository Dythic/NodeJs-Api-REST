import type { FastifyInstance } from 'fastify';
import { usersRoutes } from '../../modules/users/routes.js';
import { categoriesRoutes } from '../../modules/categories/routes.js';
import { votesRoutes } from '../../modules/votes/routes.js';

export async function registerRoutes(app: FastifyInstance) {
  await app.register(usersRoutes, { prefix: '/api/users' });
  await app.register(categoriesRoutes, { prefix: '/api/categories' });
  await app.register(votesRoutes, { prefix: '/api' });
}
