import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { authConfig } from '../config/auth';
import { AppError } from '../errors/AppError';

interface TokenPayload {
  sub: string;
  role: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token não fornecido', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(
      token,
      authConfig.jwt.secret as jwt.Secret
    ) as TokenPayload;

    req.user = {
      id: Number(decoded.sub),
      role: decoded.role,
    };

    return next();
  } catch {
    throw new AppError('Token inválido ou expirado', 401);
  }
}
