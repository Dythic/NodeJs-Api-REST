import { prisma } from '../../core/db/client';

export const votesRepository = {
  create: (data: { userId: number; categoryId: number; gameId: number }) => prisma.vote.create({ data }),
  results: async () => {
    const groups = await prisma.vote.groupBy({
      by: ['categoryId', 'gameId'],
      _count: { id: true },
    });
    const withNames = await Promise.all(
      groups.map(async (g: { categoryId: number; gameId: number; _count: { id: number } }) => {
        const category = await prisma.category.findUnique({ where: { id: g.categoryId } });
        const game = await prisma.game.findUnique({ where: { id: g.gameId } });
        return {
          categoryId: g.categoryId,
          category: category?.name,
          gameId: g.gameId,
          game: game?.title,
          votes: g._count.id,
        };
      })
    );
    return withNames;
  },
};
