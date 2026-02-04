import { prisma } from '../config/prisma';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { AppError } from '../errors/AppError';
import bcrypt from 'bcryptjs';

class UserService {
  async create({ name, email, password, role }: CreateUserDTO) {
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      throw new AppError('Usuário já existe', 400);
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        role: role ?? 'admin',
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }
}

export { UserService };
