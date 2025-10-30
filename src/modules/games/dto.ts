import { z } from 'zod';

export const createGameSchema = z.object({
  title: z.string().min(1),
  studio: z.string().optional(),
  imageUrl: z.string().url().optional(),
  categoryIds: z.array(z.number().int().positive()).optional(),
});

export const updateGameSchema = z.object({
  title: z.string().min(1).optional(),
  studio: z.string().optional(),
  imageUrl: z.string().url().optional(),
  categoryIds: z.array(z.number().int().positive()).optional(),
});

export type CreateGameInput = z.infer<typeof createGameSchema>;
export type UpdateGameInput = z.infer<typeof updateGameSchema>;

