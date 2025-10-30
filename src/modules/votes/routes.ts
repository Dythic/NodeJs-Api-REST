import type { FastifyInstance } from 'fastify';
import { votesController } from './controller.js';

export async function votesRoutes(app: FastifyInstance) {
  app.post('/votes', votesController.create as any);
  app.get('/results', votesController.results as any);
}
