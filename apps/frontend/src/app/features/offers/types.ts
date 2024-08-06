import { z } from 'zod';

export const createOfferSchema = z.object({
  role: z.string().min(1, 'Role is required'),
  description: z.string().min(1, 'Description is required'),
  salary: z.number().positive(),
});

export type CreateOfferDto = z.infer<typeof createOfferSchema>;
