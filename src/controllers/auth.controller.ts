import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

class AuthController {
  async login(req: Request, res: Response) {
    const authService = new AuthService();
    const result = await authService.login(req.body);
    return res.json(result);
  }
}

export { AuthController };
