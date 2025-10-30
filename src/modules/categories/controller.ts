import type { FastifyRequest, FastifyReply } from 'fastify';
import { categoriesService } from './service.js';
import { createCategorySchema, updateCategorySchema } from './dto.js';

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
  create: async (req: FastifyRequest, rep: FastifyReply) => {
    const body = createCategorySchema.parse((req as any).body);
    const category = await categoriesService.create(body.name, body.slug);
    return rep.code(201).send(category);
  },
  update: async (req: FastifyRequest, rep: FastifyReply) => {
    const id = Number((req.params as any).id);
    const body = updateCategorySchema.parse((req as any).body);
    const category = await categoriesService.update(id, body);
    return rep.send(category);
  },
  delete: async (req: FastifyRequest, rep: FastifyReply) => {
    const id = Number((req.params as any).id);
    await categoriesService.delete(id);
    return rep.send({ message: 'Category supprimée' });
  },
};
