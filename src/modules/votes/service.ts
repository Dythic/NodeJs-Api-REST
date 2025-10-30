import { votesRepository } from './repository.js';

export const votesService = {
  create: (data: { userId: number; categoryId: number; gameId: number }) => votesRepository.create(data),
  results: () => votesRepository.results(),
};
