import { prisma } from '../../core/db/client.js';

export const usersRepository = {
  findByEmail: (email: string) => prisma.user.findUnique({ where: { email } }),
  findById: (id: number) => prisma.user.findUnique({ where: { id } }),
  create: (data: { username: string; email: string; password: string }) => prisma.user.create({ data }),
  update: (id: number, data: Partial<{ username: string; email: string; password: string }>) =>
    prisma.user.update({ where: { id }, data }),
  delete: (id: number) => prisma.user.delete({ where: { id } }),
};
