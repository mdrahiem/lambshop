import express from "express";
import type { Request, Response } from "express";

import * as HerdService from "../services";
import { getTotalMilk } from "../utils/stock.helper";

export const yakRouter = express.Router();

yakRouter.get("/:day", async (request: Request, response: Response) => {
  try {
    const day: number = parseInt(request.params.day, 10);
    const herdList = await HerdService.getherdList();
    const totalOrders = await HerdService.getTotalOrders();
    const totalMilk = getTotalMilk(herdList, totalOrders, day);

    return response.status(200).json({
      totalMilk,
    });
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
