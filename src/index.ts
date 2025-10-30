import { createServer } from './app/server.js';
import { env } from './core/config/env.js';

async function main() {
  const app = await createServer();
  await app.listen({ port: env.PORT, host: '0.0.0.0' });
  app.log.info(`Server listening on port ${env.PORT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
