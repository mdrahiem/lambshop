import { IOrderPayload, Lamb } from "../types";

const LAMB_MAX_AGE = 9.99;
const MIN_AGE_TO_SHAVE = 1;

/*
    @param1 = herdList
    @param2 = day for which order be delivered
    @info: A Lamb can produce 50-D*0.03 liters of milk (D = age in days).
           Also the age of the lamb is 1 year = 100 days
*/
const getTotalMilk = (
  herdList: Lamb[],
  totalOrders: IOrderPayload[] = [],
  day: number = 0
): number => {
  const totalMilkFromOrders =
    totalOrders.length > 0 ? totalOrders.reduce((a, b) => b.milk + a, 0) : 0;
  const daysArray = day > 0 ? Array.from(Array(day).keys()) : [];
  const totalMilkFromHerds =
    daysArray.length > 2
      ? daysArray
          .map((dayItem) => getMilkFromHerd(herdList, dayItem))
          .reduce((a, b) => b + a, 0)
      : getMilkFromHerd(herdList);

  return Math.max(totalMilkFromHerds - totalMilkFromOrders, 0);
};

const getMilkFromHerd = (herdList: Lamb[], dayItem = 0): number => {
  return herdList.reduce(
    (total, current) =>
      current.sex === "f" && current.age <= LAMB_MAX_AGE
        ? 50 - (current.age * 100 + dayItem) * 0.03 + total
        : total,
    0
  );
};

/*
    @param1 = herdList
    @param2 = day for which order be delivered
    @info: At most every 8+D*0.01 days you can again shave a Lamb (D = age in days).
*/
const getTotalSkins = (
  herdList: Lamb[],
  totalOrders: IOrderPayload[] = [],
  day: number = 0
): number => {
  const totalSkinsFromOrders =
    totalOrders.length > 0
      ? totalOrders.reduce((a, b) => (b.skins ? b.skins + a : 0), 0)
      : 0;
  const totalSkinsFromHerds = herdList
    .map((herd) =>
      herd.age > MIN_AGE_TO_SHAVE
        ? Math.floor((day > 2 ? day - 2 : day) / (8 + herd.age * 100 * 0.01)) +
          1
        : 0
    )
    .reduce((a, b) => b + a, 0);

  return Math.max(totalSkinsFromHerds - totalSkinsFromOrders, 0);
};

export { getTotalMilk, getTotalSkins };
