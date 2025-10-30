import Fastify from 'fastify';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import { env } from '../core/config/env';
import { buildLogger } from '../core/logger/logger';
import { registerRoutes } from './routes';
import { registerAuth } from './middlewares/auth';

export async function createServer() {
  const app = Fastify({ logger: buildLogger() });
  await app.register(cors, { origin: env.CORS_ORIGINS });
  await app.register(swagger, {
    openapi: {
      info: { title: 'API', version: '1.0.0' },
    },
  });
  await app.register(swaggerUI, { routePrefix: '/docs' });
  await registerAuth(app);

  await registerRoutes(app);

  app.setErrorHandler((err, _req, reply) => {
    const status = (err as any).statusCode || 500;
    const message = err.message || 'Internal Server Error';
    reply.code(status).send({ error: { message } });
  });

  app.get('/healthz', async () => ({ status: 'ok' }));
  app.get('/readyz', async () => ({ status: 'ready' }));

  return app;
}
