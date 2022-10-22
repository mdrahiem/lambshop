import express from "express";
import type { Request, Response } from "express";

import * as OrderService from "../services";
import { getTotalMilk, getTotalSkins } from "../utils/stock.helper";
import { IOrderPayload } from "../types";

export const orderRouter = express.Router();

orderRouter.post("/:days", async (request: Request, response: Response) => {
  try {
    const { params, body } = request;
    const { customer, milk: orderedMilk, skins: orderdSkin } = body;
    const days: number = parseInt(params.days, 10);
    const herdList = await OrderService.getherdList();
    const milkInStock = getTotalMilk(herdList);
    const skinsInStock = getTotalSkins(herdList);
    const orderPayload: IOrderPayload = {
      customer,
      skins: orderdSkin,
      days,
      milk: orderedMilk,
    };
    if (
      (milkInStock > orderedMilk && skinsInStock > orderdSkin) ||
      milkInStock > orderedMilk
    ) {
      await OrderService.createOrder(orderPayload);
      return response.status(201).json(body);
    } else if (milkInStock > orderedMilk && skinsInStock < orderdSkin) {
      await OrderService.createOrder(orderPayload);
      delete body.order.skins;
      return { status: 206, order: body };
    } else if (milkInStock < orderedMilk && skinsInStock > orderdSkin) {
      await OrderService.createOrder(orderPayload);
      delete body.order.skins;
      return { status: 206, order: body };
    }
    return { status: 404 };
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
