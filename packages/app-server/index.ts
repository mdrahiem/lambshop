import express from "express";
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";

const appRouter = trpc.router().query("hello", {
  resolve() {
    return "hello world";
  },
});

export type AppRouter = typeof appRouter;

const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => null,
  })
);

const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello from app-server");
});

app.listen(port, () => {
  console.log(`app-server listening at http://localhost:${port}`);
});
