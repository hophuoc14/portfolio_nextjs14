import {publicProcedure, router} from "@/trpc/router";
import {z} from "zod";
import prisma from "@/lib/prisma";

export const postRouter = router({
  getAll: publicProcedure.query(async () => {
    try{
      const post = await prisma.post.findMany()
      return post
    }catch (e){
      console.log(e)
      return e
    }
  }),
})