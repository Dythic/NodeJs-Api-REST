import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createServer } from '../src/app/server';

let app: Awaited<ReturnType<typeof createServer>>;

describe('health endpoints', () => {
  beforeAll(async () => {
    process.env.JWT_SECRET = process.env.JWT_SECRET || 'test-secret';
    process.env.CORS_ORIGINS = '*';
    app = await createServer();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /healthz -> 200', async () => {
    const res = await app.inject({ method: 'GET', url: '/healthz' });
    expect(res.statusCode).toBe(200);
  });

  it('GET /readyz -> 200', async () => {
    const res = await app.inject({ method: 'GET', url: '/readyz' });
    expect(res.statusCode).toBe(200);
  });
});
