// import { Client } from "@planetscale/database";
// import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
import { PrismaClient } from "@prisma/client";
import prismaRandom from 'prisma-extension-random'

import { env } from "~/env.js";

// TODO: Rewrite client setup to allow for simple dev enviroments

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// // const client = new Client({ url: env.POSTGRES_PRISMA_URL });

// export const db =
//   (globalForPrisma.prisma ??
//     new PrismaClient(
//       // {
//       // log:
//       //   env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
//       // adapter: new PrismaPlanetScale(client),}
//     )).$extends(prismaRandom());

// if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export const db = new PrismaClient().$extends(prismaRandom());