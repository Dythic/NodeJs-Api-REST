import dotenv from 'dotenv';
import { envsafe, str, num, bool } from 'envsafe';

dotenv.config();

export const env = envsafe({
  NODE_ENV: str({ default: 'development' }),
  PORT: num({ default: 3000 }),
  JWT_SECRET: str({ default: 'change-me' }),
  DATABASE_URL: str({ desc: 'postgresql connection string' }),
  CORS_ORIGINS: str({ default: '*' }),
  AUTH_USE_COOKIES: bool({ default: false })
});
