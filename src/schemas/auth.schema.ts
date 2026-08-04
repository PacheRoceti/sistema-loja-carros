import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ message: 'email é obrigatório' })
    .email('email inválido'),
  password: z
    .string({ message: 'password é obrigatório' })
    .min(1, 'password é obrigatório'),
});