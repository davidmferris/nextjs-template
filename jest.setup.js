import { PrismaClient } from '@prisma/client';

global.prisma = new PrismaClient();

afterAll(async () => {
  await global.prisma.$disconnect();
});
