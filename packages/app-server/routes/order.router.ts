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
    const totalOrders = await OrderService.getTotalOrders();
    const milkInStock = getTotalMilk(herdList, totalOrders);
    const skinsInStock = getTotalSkins(herdList, totalOrders);
    const orderPayload: IOrderPayload = {
      customer,
      skins: orderdSkin,
      days,
      milk: orderedMilk,
    };
    console.log(milkInStock, orderedMilk, skinsInStock, orderdSkin);

    if (milkInStock >= orderedMilk && skinsInStock >= orderdSkin) {
      await OrderService.createOrder(orderPayload);
      return response.status(201).json(body);
    } else if (milkInStock >= orderedMilk && skinsInStock < orderdSkin) {
      await OrderService.createOrder(orderPayload);
      return response.status(206).send({ milk: orderedMilk });
    } else if (milkInStock < orderedMilk && skinsInStock >= orderdSkin) {
      await OrderService.createOrder(orderPayload);
      return response.status(206).send({ skins: orderdSkin });
    }
    return response
      .status(404)
      .type("text/html")
      .send("Sorry stock not available at the moment!");
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
