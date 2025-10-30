import type { FastifyInstance } from 'fastify';
import jwt from '@fastify/jwt';
import { env } from '../../core/config/env';

export async function registerAuth(app: FastifyInstance) {
  await app.register(jwt, { secret: env.JWT_SECRET });
  app.decorate('authenticate', async (request: any, reply: any) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.code(401).send({ error: 'Non authentifié' });
    }
  });
}
