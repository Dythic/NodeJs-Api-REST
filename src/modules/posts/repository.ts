import { prisma } from '../../core/db/client';

export const postsRepository = {
  create: (data: { title: string; content: string; authorId: number }) => prisma.post.create({ data }),
  findById: (id: number) => prisma.post.findUnique({ where: { id } }),
  update: (id: number, data: Partial<{ title: string; content: string }>) => prisma.post.update({ where: { id }, data }),
  delete: (id: number) => prisma.post.delete({ where: { id } }),
};
