import { IOrderPayload, Yak } from "../types";
import { db } from "../utils/db.server";

export const getherdList = async (): Promise<Yak[]> => {
  return db.yak.findMany({
    select: {
      id: true,
      name: true,
      age: true,
      sex: true,
    },
  });
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
