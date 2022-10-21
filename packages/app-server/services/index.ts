import { Yak } from "../types";
import { db } from "../utils/db.server";

export const herdList = async (): Promise<Yak[]> => {
  return db.yak.findMany({
    select: {
      id: true,
      name: true,
      age: true,
      sex: true,
    },
  });
};
