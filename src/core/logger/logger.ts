import type { LoggerOptions } from 'pino';

export function buildLogger(): LoggerOptions {
  const pretty = process.env.NODE_ENV !== 'production';
  return {
    level: process.env.LOG_LEVEL || 'info',
    transport: pretty
      ? { target: 'pino-pretty', options: { colorize: true } }
      : undefined,
  } as LoggerOptions;
}
