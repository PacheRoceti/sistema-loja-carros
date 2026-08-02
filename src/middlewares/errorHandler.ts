import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { AppError } from '../errors/AppError';

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Erros de negócio conhecidos (ex: "Carro não encontrado")
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Erros do Prisma (dado inválido, formato errado, etc.)
  if (
    err instanceof Prisma.PrismaClientValidationError ||
    err instanceof Prisma.PrismaClientKnownRequestError
  ) {
    console.error('Erro do Prisma:', err.message);
    return res.status(400).json({
      error: 'Não foi possível processar os dados enviados.',
    });
  }

  // Qualquer outro erro não esperado
  console.error('Erro não tratado:', err);
  return res.status(500).json({
    error: 'Erro interno do servidor.',
  });
}