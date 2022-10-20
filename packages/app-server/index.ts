import express from "express";
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import { initData, IYak } from "./baseData";

const appRouter = trpc.router().query("load", {
  resolve() {
    return initData;
  },
});

const app = express();

app.use(cors());

app.use(
  "/yak-shop",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => null,
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
