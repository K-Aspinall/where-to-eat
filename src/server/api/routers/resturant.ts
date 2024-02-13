import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const resturantRouter = createTRPCRouter({
    create: publicProcedure
        .input(z.object({ name: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.resturant.create({
                data: {
                    name: input.name,
                },
            });
        }),

    // Old, raw method of fetching random 
    getRandomRaw: publicProcedure.query(({ ctx }) => {
        // More performant that finding all then selecting random but an ugly non-typesafe workaround
        return ctx.db.$queryRawUnsafe(
            // DO NOT pass in or accept user input here
            `SELECT * FROM "Resturant" ORDER BY RANDOM() LIMIT 1;`,
        );
    }),

    getRandom: publicProcedure.query(({ ctx }) => {
        return ctx.db.resturant.findRandom();
    }),

    // TODO: Move to fetching random list for caching?
    getRandomMany: publicProcedure.query(({ ctx }) => {
        return ctx.db.resturant.findManyRandom(10);
    }),

    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.db.resturant.findMany();
    }),
});
