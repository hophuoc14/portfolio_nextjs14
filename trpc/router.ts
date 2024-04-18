import {initTRPC, TRPCError} from "@trpc/server";
import {Context} from "@/lib/types";

const t = initTRPC.context<Context>().create()
const middleware = t.middleware
const isAuth = middleware(async ({ctx,next}) => {
  //
  // const { user } = ctx
  //
  // if (!user || !user.id) {
  //   throw new TRPCError({ code: 'UNAUTHORIZED' })
  // }

  return next(
    {
      ctx: {
        user: "phuoc"
      }
    }
  )
})

export const router = t.router
export const publicProcedure = t.procedure
export const privateProcedure = t.procedure.use(isAuth)
