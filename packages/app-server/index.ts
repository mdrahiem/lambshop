import express from "express";
import cors from "cors";
import { loadRouter } from "./routes/load.router";
import { herdRouter } from "./routes/herd.router";
import { stockRouter } from "./routes/stock.router";
import * as types from "./types";
import { orderRouter } from "./routes/order.router";
import { lambRouter } from "./routes/lamb.router";

export const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/lamb-shop/load", loadRouter);
app.use("/lamb-shop/lamb", lambRouter);
app.use("/lamb-shop/herd", herdRouter);
app.use("/lamb-shop/stock", stockRouter);
app.use("/lamb-shop/order", orderRouter);

const port = 8080;

app.get("/", (_req, res) => {
  res.send("Hello from app-server");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`app-server listening at http://localhost:${port}`);
  });
}

export { types };
