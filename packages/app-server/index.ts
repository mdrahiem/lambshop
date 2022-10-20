import express from "express";
import cors from "cors";
import { initData, IYak } from "./baseData";
import { loadRouter } from "./load/load.router";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/yak-shop/load", loadRouter);

const port = 8080;

app.get("/", (_req, res) => {
  res.send("Hello from app-server");
});

app.listen(port, () => {
  console.log(`app-server listening at http://localhost:${port}`);
});
