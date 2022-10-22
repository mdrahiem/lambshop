import { IOrderPayload, Yak } from "../types";
import { db } from "../utils/db.server";

export const getherdList = async (): Promise<Yak[]> => {
  const totalHerds = await db.yak.findMany({
    select: {
      id: true,
      name: true,
      age: true,
      sex: true,
    },
  });
  return totalHerds;
};

export const getTotalOrders = async (): Promise<IOrderPayload[]> => {
  const totalOrders = await db.order.findMany({
    select: {
      id: true,
      customer: true,
      milk: true,
      skins: true,
      days: true,
    },
  });
  return totalOrders;
};

export const createOrder = async (
  orderPayload: IOrderPayload
): Promise<IOrderPayload> => {
  const { customer, milk, days, skins } = orderPayload;
  return db.order.create({
    data: {
      customer,
      milk,
      skins,
      days,
    },
  });
};
