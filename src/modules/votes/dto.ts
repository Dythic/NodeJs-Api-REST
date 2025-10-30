import { z } from 'zod';

export const createVoteSchema = z.object({
  userId: z.number().int().positive(),
  categoryId: z.number().int().positive(),
  gameId: z.number().int().positive(),
});

export type CreateVoteInput = z.infer<typeof createVoteSchema>;
