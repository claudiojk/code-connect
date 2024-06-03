import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });
  

export default db
