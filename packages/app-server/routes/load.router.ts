import express from "express";
import type { Request, Response } from "express";

import * as LoadService from "../services";

export const loadRouter = express.Router();

loadRouter.post("/", async (request: Request, response: Response) => {
  try {
    const herdList = await LoadService.herdList();
    return response.status(205).json(herdList);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

loadRouter.get("/", async (request: Request, response: Response) => {
  try {
    const herdList = await LoadService.herdList();
    return response.status(200).json(herdList);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
