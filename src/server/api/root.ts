import { createTRPCRouter } from "~/server/api/trpc";
import { tagRouter } from "./routers/tag";
import { resturantRouter } from "./routers/resturant";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  tag: tagRouter,
  resturant: resturantRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
