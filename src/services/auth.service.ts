import { prisma } from "../config/prisma";
import { LoginDTO } from "../dtos/login.dto";
import { AppError } from "../errors/AppError";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authConfig } from "../config/auth";

class AuthService {
  async login({ email, password }: LoginDTO) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AppError("Email ou senha inválidos", 401);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email ou senha inválidos", 401);
    }

    const token = jwt.sign(
      { role: user.role },
      authConfig.jwt.secret as jwt.Secret,
      {
        subject: String(user.id),
        expiresIn: authConfig.jwt.expiresIn,
      },
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    };
  }
}

export { AuthService };
