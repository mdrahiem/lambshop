import express from "express";
import type { Request, Response } from "express";

import * as HerdService from "../services";
import { getTotalMilk } from "../utils/stock.helper";

export const herdRouter = express.Router();

herdRouter.get("/:day", async (request: Request, response: Response) => {
  try {
    const day: number = parseInt(request.params.day, 10);
    const herdList = await HerdService.herdList();
    const totalMilk = getTotalMilk(herdList, day);

    return response.status(200).json({
      totalMilk,
    });
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});