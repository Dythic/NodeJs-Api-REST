import type { FastifyRequest, FastifyReply } from 'fastify';
import { gamesService } from './service.js';
import { createGameSchema, updateGameSchema } from './dto.js';

export const gamesController = {
  create: async (req: FastifyRequest, rep: FastifyReply) => {
    const body = createGameSchema.parse((req as any).body);
    const game = await gamesService.create(body.title, body.studio, body.imageUrl, body.categoryIds);
    return rep.code(201).send(game);
  },
  update: async (req: FastifyRequest, rep: FastifyReply) => {
    const id = Number((req.params as any).id);
    const body = updateGameSchema.parse((req as any).body);
    const game = await gamesService.update(id, body);
    return rep.send(game);
  },
  delete: async (req: FastifyRequest, rep: FastifyReply) => {
    const id = Number((req.params as any).id);
    await gamesService.delete(id);
    return rep.send({ message: 'Jeu supprimé' });
  },
};

