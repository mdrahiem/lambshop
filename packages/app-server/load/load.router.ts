import express from "express";
import type { Request, Response } from "express";

import * as LoadService from "./load.service";

export const loadRouter = express.Router();

loadRouter.post("/", async (request: Request, response: Response) => {
  try {
    const authors = await LoadService.herdList();
    return response.status(205).json(authors);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
