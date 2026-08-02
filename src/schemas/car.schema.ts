import { z } from 'zod';

const fuelEnum = z.enum([
  'Gasolina',
  'Flex',
  'Diesel',
  'Elétrico',
  'Híbrido',
]);

export const createCarSchema = z.object({
  name: z
    .string({ message: 'Nome do Veículo é obrigatório' })
    .min(1, 'Nome do Veículo é obrigatório'),
  brand: z
    .string({ message: 'Marca é obrigatória' })
    .min(1, 'Marca é obrigatória'),
  model: z
    .string({ message: 'Modelo é obrigatório' })
    .min(1, 'Modelo é obrigatório'),
  year: z
    .number({ message: 'Ano deve ser um número' })
    .int('Ano deve ser um número inteiro')
    .min(1900, 'Ano inválido')
    .max(new Date().getFullYear() + 1, 'Ano inválido'),
  price: z
    .number({ message: 'Preço deve ser um número' })
    .positive('Preço deve ser maior que zero'),
  km: z
    .number({ message: 'Km deve ser um número' })
    .int('Km deve ser um número inteiro')
    .min(0, 'Km não pode ser negativo'),
  fuel: fuelEnum,
  color: z.string().optional(),
  description: z.string().optional(),
});

export const updateCarSchema = createCarSchema.partial();

export const carIdParamSchema = z.object({
  id: z.coerce
    .number({ message: 'Número de Identificação deve ser um número' })
    .int('Número de Identificação deve ser um número inteiro')
    .positive('Número de Identificação inválido'),
});