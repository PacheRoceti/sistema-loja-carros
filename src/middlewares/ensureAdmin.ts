import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

export function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.user.role !== 'admin') {
    throw new AppError('Acesso permitido apenas para administradores', 403);
  }

  return next();
}
