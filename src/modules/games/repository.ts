import { prisma } from '../../core/db/client.js';

export const gamesRepository = {
  create: (data: { title: string; studio?: string | null; imageUrl?: string | null }) => prisma.game.create({ data }),
  linkCategories: (gameId: number, categoryIds: number[]) =>
    prisma.gameCategory.createMany({
      data: categoryIds.map((categoryId) => ({ gameId, categoryId })),
      skipDuplicates: true,
    }),
  update: (id: number, data: { title?: string; studio?: string | null; imageUrl?: string | null }) => prisma.game.update({ where: { id }, data }),
  delete: (id: number) => prisma.game.delete({ where: { id } }),
  deleteCategories: (gameId: number) => prisma.gameCategory.deleteMany({ where: { gameId } }),
};

