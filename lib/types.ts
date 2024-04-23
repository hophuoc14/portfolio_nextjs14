import { links } from "./data";
import {NextApiRequest} from "next";
import {inferAsyncReturnType} from "@trpc/server";
import {createContext} from "react";

// @ts-ignore
export type SectionName = (typeof links)[number]["name"];

export type Context = inferAsyncReturnType<
  typeof createContext
>