import * as trpc from "@trpc/server";
import { Context } from "../context";

const loadRoute = trpc.router<Context>().query("load", {
  resolve: async ({ input, ctx }) => {
    const herdlist = {};
    ctx.res.statusCode = 205;
    return herdlist;
  },
});

export { loadRoute };
