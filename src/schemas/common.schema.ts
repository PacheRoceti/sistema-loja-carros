import { z } from 'zod';

export function idParamSchema(fieldName: string) {
  return z.object({
    [fieldName]: z.coerce
      .number({ message: `${fieldName} deve ser um número` })
      .int(`${fieldName} deve ser um número inteiro`)
      .positive(`${fieldName} inválido`),
  });
}