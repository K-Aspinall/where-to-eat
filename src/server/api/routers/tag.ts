import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const tagRouter = createTRPCRouter({
    create: publicProcedure
        .input(z.object({ name: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.tag.create({
                data: {
                    name: input.name,
                },
            });
        }),

    getLatest: publicProcedure.query(({ ctx }) => {
        return ctx.db.tag.findFirst({
            orderBy: { createdAt: "desc" },
        });
    }),

    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.db.tag.findMany();
    }),
});
