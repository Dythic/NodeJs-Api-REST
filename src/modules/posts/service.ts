import { postsRepository } from './repository';

export const postsService = {
  create: (authorId: number, data: { title: string; content: string }) =>
    postsRepository.create({ ...data, authorId }),
  getById: (id: number) => postsRepository.findById(id),
  async update(id: number, authorId: number, data: Partial<{ title: string; content: string }>) {
    const post = await postsRepository.findById(id);
    if (!post) throw Object.assign(new Error('Post non trouvé'), { statusCode: 404 });
    if (post.authorId !== authorId) throw Object.assign(new Error('Action non autorisée'), { statusCode: 403 });
    return postsRepository.update(id, data);
  },
  async remove(id: number, authorId: number) {
    const post = await postsRepository.findById(id);
    if (!post) throw Object.assign(new Error('Post non trouvé'), { statusCode: 404 });
    if (post.authorId !== authorId) throw Object.assign(new Error('Action non autorisée'), { statusCode: 403 });
    return postsRepository.delete(id);
  },
};
