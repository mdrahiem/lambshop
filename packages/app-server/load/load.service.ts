import { IHerd, IYak } from "../baseData";
import { db } from "../utils/db.server";

export type Yak = {
  id: number;
  name: string;
  age: number;
  sex: string;
};

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
