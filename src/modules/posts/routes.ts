import type { FastifyInstance } from 'fastify';
import { postsController } from './controller';

export async function postsRoutes(app: FastifyInstance) {
  app.post('/', { preHandler: [(app as any).authenticate] }, postsController.create as any);
  app.get('/:id', postsController.get as any);
  app.put('/:id', { preHandler: [(app as any).authenticate] }, postsController.update as any);
  app.delete('/:id', { preHandler: [(app as any).authenticate] }, postsController.delete as any);
}
