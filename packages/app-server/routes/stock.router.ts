import express from "express";
import type { Request, Response } from "express";

import * as HerdService from "../services";
import { getTotalMilk, getTotalSkins } from "../utils/stock.helper";

export const stockRouter = express.Router();

stockRouter.get("/:day", async (request: Request, response: Response) => {
  try {
    const day: number = parseInt(request.params.day, 10);
    const herdList = await HerdService.getherdList();
    const totalOrders = await HerdService.getTotalOrders();
    const milk = getTotalMilk(herdList, totalOrders, day);
    const skins = getTotalSkins(herdList, totalOrders, day);
    return !milk && !skins
      ? response.status(204)
      : !milk
      ? response.status(206).json({
          skins,
        })
      : !skins
      ? response.status(206).json({
          milk,
        })
      : response.status(200).json({
          milk,
          skins,
        });
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

stockRouter.get("/", async (_, response: Response) => {
  try {
    const herdList = await HerdService.getherdList();
    const totalOrders = await HerdService.getTotalOrders();
    const milk = getTotalMilk(herdList, totalOrders);
    const skins = getTotalSkins(herdList, totalOrders);
    return !milk && !skins
      ? response.status(204).json({})
      : !milk
      ? response.status(206).json({
          skins,
        })
      : !skins
      ? response.status(206).json({
          milk,
        })
      : response.status(200).json({
          milk,
          skins,
        });
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
