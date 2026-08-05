import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { MulterError } from 'multer';
import { AppError } from '../errors/AppError';

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (err instanceof MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'Arquivo muito grande. Máximo permitido: 5MB.' });
    }
    return res.status(400).json({ error: 'Erro no upload do arquivo.' });
  }

  if (
    err instanceof Prisma.PrismaClientValidationError ||
    err instanceof Prisma.PrismaClientKnownRequestError
  ) {
    console.error('Erro do Prisma:', err.message);
    return res.status(400).json({
      error: 'Não foi possível processar os dados enviados.',
    });
  }

  console.error('Erro não tratado:', err);
  return res.status(500).json({
    error: 'Erro interno do servidor.',
  });
}