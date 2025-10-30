import { categoriesRepository } from './repository';

export const categoriesService = {
  list: () => categoriesRepository.list(),
  gamesByCategory: (categoryId: number) => categoriesRepository.gamesByCategory(categoryId),
};
