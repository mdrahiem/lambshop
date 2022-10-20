import { inferAsyncReturnType } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export const createContext = async <Context>({
  req,
  res,
}: CreateExpressContextOptions) => {
  return { req, res };
};

export type Context = inferAsyncReturnType<typeof createContext>;
