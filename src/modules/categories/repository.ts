import { prisma } from '../../core/db/client.js';

export const categoriesRepository = {
  list: () => prisma.category.findMany({ orderBy: { name: 'asc' } }),
  gamesByCategory: (categoryId: number) =>
    prisma.game.findMany({
      where: { categories: { some: { categoryId } } },
      orderBy: { title: 'asc' },
    }),
  create: (data: { name: string; slug: string }) => prisma.category.create({ data }),
  update: (id: number, data: { name?: string; slug?: string }) => prisma.category.update({ where: { id }, data }),
  delete: (id: number) => prisma.category.delete({ where: { id } }),
};
