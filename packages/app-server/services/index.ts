import { IYak } from "../baseData";
import { IOrderPayload, Yak } from "../types";
import { db } from "../utils/db.server";

export const createHerdList = async (herd: IYak[]) => {
  await db.yak.deleteMany();
  await db.order.deleteMany();
  await Promise.all(
    herd.map((d) =>
      db.yak.create({
        data: {
          name: d.name,
          age: Number(d.age),
          sex: d.sex,
        },
      })
    )
  );
  const herdList = await db.yak.findMany({
    select: {
      id: true,
      name: true,
      age: true,
      sex: true,
    },
  });
  return herdList;
};

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
