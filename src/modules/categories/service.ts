import { categoriesRepository } from './repository.js';

export const categoriesService = {
  list: () => categoriesRepository.list(),
  gamesByCategory: (categoryId: number) => categoriesRepository.gamesByCategory(categoryId),
};
