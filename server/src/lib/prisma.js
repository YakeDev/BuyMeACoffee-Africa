import { PrismaClient } from "@prisma/client";

// Instantiate a single Prisma client for the entire application lifecycle
export const prisma = new PrismaClient();

export async function connectPrisma() {
  await prisma.$connect();
}

export async function disconnectPrisma() {
  await prisma.$disconnect();
}
