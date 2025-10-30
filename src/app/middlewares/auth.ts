import type { FastifyInstance } from 'fastify';
import jwt from '@fastify/jwt';
import { env } from '../../core/config/env.js';

export async function registerAuth(app: FastifyInstance) {
  await app.register(jwt, { secret: env.JWT_SECRET });
  app.decorate('authenticate', async (request: any, reply: any) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.code(401).send({ error: 'Non authentifié' });
    }
  });
  app.decorate('requireAdmin', async (request: any, reply: any) => {
    try {
      await request.jwtVerify();
      if (request.user?.role !== 'admin') {
        return reply.code(403).send({ error: 'Accès refusé : rôle admin requis' });
      }
    } catch (err) {
      reply.code(401).send({ error: 'Non authentifié' });
    }
  });
}
