import type { FastifyRequest, FastifyReply } from 'fastify';
import { categoriesService } from './service';

export const categoriesController = {
  list: async (_req: FastifyRequest, rep: FastifyReply) => {
    const data = await categoriesService.list();
    return rep.send(data);
  },
  games: async (req: FastifyRequest, rep: FastifyReply) => {
    const id = Number((req.params as any).id);
    const data = await categoriesService.gamesByCategory(id);
    return rep.send(data);
  },
};
