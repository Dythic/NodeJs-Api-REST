import type { FastifyInstance } from 'fastify';
import { gamesController } from './controller.js';

export async function gamesRoutes(app: FastifyInstance) {
  app.post('/', { preHandler: [(app as any).requireAdmin] }, gamesController.create as any);
  app.put('/:id', { preHandler: [(app as any).requireAdmin] }, gamesController.update as any);
  app.delete('/:id', { preHandler: [(app as any).requireAdmin] }, gamesController.delete as any);
}

