import express from "express";
import cors from "cors";
import { loadRouter } from "./routes/load.router";
import { herdRouter } from "./routes/herd.router";
import { stockRouter } from "./routes/stock.router";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/yak-shop/load", loadRouter);
app.use("/yak-shop/herd", herdRouter);
app.use("/yak-shop/stock", stockRouter);

const port = 8080;

app.get("/", (_req, res) => {
  res.send("Hello from app-server");
});

app.listen(port, () => {
  console.log(`app-server listening at http://localhost:${port}`);
});
