import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

type ValidateTarget = 'body' | 'query' | 'params';

export function validate(schema: ZodType, target: ValidateTarget = 'body') {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[target]);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      }));

      return res.status(400).json({
        error: 'Dados inválidos',
        details: errors,
      });
    }

    req[target] = result.data;
    return next();
  };
}