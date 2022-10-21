import express from "express";
import type { Request, Response } from "express";

import * as HerdService from "../services";
import { getTotalMilk, getTotalSkins } from "../utils/stock.helper";

export const stockRouter = express.Router();

stockRouter.get("/:day", async (request: Request, response: Response) => {
  try {
    const day: number = parseInt(request.params.day, 10);
    const herdList = await HerdService.getherdList();
    const milk = getTotalMilk(herdList, day);
    const skins = getTotalSkins(herdList, day);

    return response.status(200).json({
      milk,
      skins,
    });
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

stockRouter.get("/", async (request: Request, response: Response) => {
  try {
    const herdList = await HerdService.getherdList();
    const milk = getTotalMilk(herdList);
    const skins = getTotalSkins(herdList);

    return response.status(200).json({
      milk,
      skins,
    });
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
