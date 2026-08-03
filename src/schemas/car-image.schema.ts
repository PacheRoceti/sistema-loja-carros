import { z } from 'zod';

export const carImageBodySchema = z.object({
  isCover: z
    .union([z.literal('true'), z.literal('false'), z.boolean()])
    .optional()
    .transform((val) => val === true || val === 'true'),
});