import { router} from "@/trpc/router";
import {postRouter} from "@/trpc/post-router";

export const appRouter = router({
  post: postRouter,
})

export type AppRouter = typeof appRouter;