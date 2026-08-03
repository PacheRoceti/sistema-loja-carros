import { z } from 'zod';

export const userRoleEnum = z.enum(['admin', 'vendedor']);

export const createUserSchema = z.object({
  name: z
    .string({ message: 'Nome é obrigatório' })
    .min(1, 'Nome é obrigatório'),
  email: z
    .string({ message: 'Email é obrigatório' })
    .email('Email inválido'),
  password: z
    .string({ message: 'Senha é obrigatória' })
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
  role: userRoleEnum.optional().default('admin'),
});