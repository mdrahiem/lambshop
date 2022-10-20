import express from "express";
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import { initData, IYak } from "./baseData";
import { createContext, Context } from "./context";

function createRouter() {
  return trpc.router<Context>();
}

export const appRouter = createRouter()
  // .query("load", {
  //   resolve: ({ input, ctx }) => {
  //     ctx.res.statusCode = 206;
  //     return `hello world`;
  //   },
  // })
  .query("load", {
    resolve: async ({ input, ctx }) => {
      const herdlist = { helo: "sdfsdf" };
      // ctx.res.statusCode = STATUS_CODES[205];
      return initData;
    },
  });
// .merge(
//   'admin.',
//   createRouter().query('secret', {
//     resolve: ({ ctx }) => {
//       if (!ctx.user) {
//         throw new TRPCError({ code: 'UNAUTHORIZED' });
//       }
//       if (ctx.user?.name !== 'alex') {
//         throw new TRPCError({ code: 'FORBIDDEN' });
//       }
//       return {
//         secret: 'sauce',
//       };
//     },
//   }),
// )
// .merge('messages.', messages);

const app = express();

app.use(cors());

app.use(
  "/yak-shop",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

const port = 8080;

app.get("/", (_req, res) => {
  res.send("Hello from app-server");
});

app.listen(port, () => {
  console.log(`app-server listening at http://localhost:${port}`);
});

export type AppRouter = typeof appRouter;
export type { IYak };
