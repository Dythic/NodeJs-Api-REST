import type { FastifyRequest, FastifyReply } from 'fastify';
import { postsService } from './service';
import { createPostSchema, updatePostSchema } from './dto';

export const postsController = {
  create: async (req: FastifyRequest, rep: FastifyReply) => {
    const userId = (req as any).user?.id;
    const body = createPostSchema.parse((req as any).body);
    const post = await postsService.create(userId, body);
    return rep.code(201).send(post);
  },
  get: async (req: FastifyRequest, rep: FastifyReply) => {
    const id = Number((req.params as any).id);
    const post = await postsService.getById(id);
    if (!post) return rep.code(404).send({ error: 'Post non trouvé' });
    return rep.send(post);
  },
  update: async (req: FastifyRequest, rep: FastifyReply) => {
    const id = Number((req.params as any).id);
    const userId = (req as any).user?.id;
    const body = updatePostSchema.parse((req as any).body);
    const post = await postsService.update(id, userId, body);
    return rep.send(post);
  },
  delete: async (req: FastifyRequest, rep: FastifyReply) => {
    const id = Number((req.params as any).id);
    const userId = (req as any).user?.id;
    await postsService.remove(id, userId);
    return rep.send({ message: 'Post supprimé' });
  },
};
