import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;
  const name = process.env.SEED_ADMIN_NAME || 'Administrador';

  if (!email || !password) {
    throw new Error(
      'Defina SEED_ADMIN_EMAIL e SEED_ADMIN_PASSWORD antes de rodar o seed.'
    );
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    console.log(`Usuário admin já existe (${email}). Nada a fazer.`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 8);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHash,
      role: 'admin',
    },
  });

  console.log(`Admin criado com sucesso: ${user.email} (id: ${user.id})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });