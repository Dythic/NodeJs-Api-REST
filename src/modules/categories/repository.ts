import { prisma } from '../../core/db/client';

export const categoriesRepository = {
  list: () => prisma.category.findMany({ orderBy: { name: 'asc' } }),
  gamesByCategory: (categoryId: number) =>
    prisma.game.findMany({
      where: { categories: { some: { categoryId } } },
      orderBy: { title: 'asc' },
    }),
};
