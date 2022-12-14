import express from "express";
import type { Request, Response } from "express";

import * as HerdService from "../services";
import { getTotalMilk } from "../utils/stock.helper";
import { getHerdsFromHerdList } from "../utils/herd.helper";

export const herdRouter = express.Router();

herdRouter.get("/:day", async (request: Request, response: Response) => {
  try {
    const requestedDay: number = parseInt(request.params.day, 10);
    const herdList = await HerdService.getherdList();
    const herd = getHerdsFromHerdList(herdList, requestedDay);
    return response.status(200).json({
      herd,
    });
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
