import { ILamb } from "../baseData";
import { IOrderPayload, Lamb } from "../types";
import { db } from "../utils/db.server";

export const createHerdList = async (herd: ILamb[] | ILamb) => {
  await db.lamb.deleteMany();
  await db.order.deleteMany();
  Array.isArray(herd)
    ? await Promise.all(
        herd.map((d) =>
          db.lamb.create({
            data: {
              name: d.name,
              age: Number(d.age),
              sex: d.sex,
            },
          })
        )
      )
    : await db.lamb.create({
        data: {
          name: herd.name,
          age: Number(herd.age),
          sex: herd.sex,
        },
      });
  const herdList = await db.lamb.findMany({
    select: {
      id: true,
      name: true,
      age: true,
      sex: true,
    },
  });
  return herdList;
};

export const getherdList = async (): Promise<Lamb[]> => {
  const totalHerds = await db.lamb.findMany({
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
