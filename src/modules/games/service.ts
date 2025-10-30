import { gamesRepository } from './repository.js';

export const gamesService = {
  async create(title: string, studio?: string, imageUrl?: string, categoryIds?: number[]) {
    const game = await gamesRepository.create({ title, studio, imageUrl });
    if (categoryIds && categoryIds.length > 0) {
      await gamesRepository.linkCategories(game.id, categoryIds);
    }
    return game;
  },
  async update(id: number, data: { title?: string; studio?: string; imageUrl?: string; categoryIds?: number[] }) {
    const { categoryIds, ...gameData } = data;
    const game = await gamesRepository.update(id, gameData);
    if (categoryIds !== undefined) {
      await gamesRepository.deleteCategories(id);
      if (categoryIds.length > 0) {
        await gamesRepository.linkCategories(id, categoryIds);
      }
    }
    return game;
  },
  async delete(id: number) {
    await gamesRepository.deleteCategories(id);
    return gamesRepository.delete(id);
  },
};

