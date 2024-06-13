import { PrismaClient } from "@prisma/client";

declare global {
    const prisma: PrismaClient | undefined;
}

export const db = (globalThis as any).prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production")
    (globalThis as any).prisma = db;


async function main() {
    //all operations related to Prima have to Go Inside this

    
}

main().
    catch(e => console.error(e)).
    finally(async () => {
        if (prisma) {
            await prisma.$disconnect();
        }
    });