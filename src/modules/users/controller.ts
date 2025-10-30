import type { FastifyRequest, FastifyReply } from 'fastify';
import { usersService } from './service';
import { loginSchema, registerSchema, updateUserSchema } from './dto';

export const usersController = {
  register: async (req: FastifyRequest, rep: FastifyReply) => {
    const body = registerSchema.parse((req as any).body);
    const user = await usersService.register(body.username, body.email, body.password);
    const token = (rep as any).jwtSign ? await (rep as any).jwtSign({ id: user.id }) : undefined;
    return rep.code(201).send({ user, token });
  },
  login: async (req: FastifyRequest, rep: FastifyReply) => {
    const body = loginSchema.parse((req as any).body);
    const user = await usersService.validateCredentials(body.email, body.password);
    if (!user) return rep.code(400).send({ error: 'Email ou mot de passe incorrect' });
    const token = (rep as any).jwtSign ? await (rep as any).jwtSign({ id: user.id }) : undefined;
    return rep.send({ user, token });
  },
  me: async (req: FastifyRequest, rep: FastifyReply) => {
    const userId = (req as any).user?.id;
    if (!userId) return rep.code(401).send({ error: 'Non authentifié' });
    const user = await usersService.getById(userId);
    if (!user) return rep.code(404).send({ error: 'Utilisateur non trouvé' });
    return rep.send(user);
  },
  updateMe: async (req: FastifyRequest, rep: FastifyReply) => {
    const userId = (req as any).user?.id;
    if (!userId) return rep.code(401).send({ error: 'Non authentifié' });
    const body = updateUserSchema.parse((req as any).body);
    const user = await usersService.update(userId, body);
    return rep.send(user);
  },
  deleteMe: async (req: FastifyRequest, rep: FastifyReply) => {
    const userId = (req as any).user?.id;
    if (!userId) return rep.code(401).send({ error: 'Non authentifié' });
    await usersService.delete(userId);
    return rep.send({ message: 'Utilisateur supprimé' });
  },
};
