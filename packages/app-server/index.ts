import express from "express";
import cors from "cors";
import { loadRouter } from "./routes/load.router";
import { herdRouter } from "./routes/herd.router";
import { stockRouter } from "./routes/stock.router";
import * as types from "./types";
import { orderRouter } from "./routes/order.router";

export const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/yak-shop/load", loadRouter);
app.use("/yak-shop/herd", herdRouter);
app.use("/yak-shop/stock", stockRouter);
app.use("/yak-shop/order", orderRouter);

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
