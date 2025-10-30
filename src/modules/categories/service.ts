import { categoriesRepository } from './repository.js';

export const categoriesService = {
  list: () => categoriesRepository.list(),
  gamesByCategory: (categoryId: number) => categoriesRepository.gamesByCategory(categoryId),
  create: (name: string, slug: string) => categoriesRepository.create({ name, slug }),
  update: (id: number, data: { name?: string; slug?: string }) => categoriesRepository.update(id, data),
  delete: (id: number) => categoriesRepository.delete(id),
};
