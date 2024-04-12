import { links } from "./data";
import {NextApiRequest} from "next";

export type SectionName = (typeof links)[number]["name"];

export interface Context{
  user?: any
}