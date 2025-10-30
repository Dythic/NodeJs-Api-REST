import type { FastifyRequest, FastifyReply } from 'fastify';
import { votesService } from './service.js';
import { createVoteSchema } from './dto.js';

export const votesController = {
  create: async (req: FastifyRequest, rep: FastifyReply) => {
    const body = createVoteSchema.parse((req as any).body);
    const vote = await votesService.create(body);
    return rep.code(201).send(vote);
  },
  results: async (_req: FastifyRequest, rep: FastifyReply) => {
    const data = await votesService.results();
    return rep.send(data);
  },
};
