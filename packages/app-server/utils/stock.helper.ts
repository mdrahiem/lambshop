import { Yak } from "../types";

// {
//     "id": 16,
//     "name": "Betty",
//     "age": 4,
//     "sex": "f"
//     },
//     {
//     "id": 17,
//     "name": "Thor",
//     "age": 2,
//     "sex": "m"
//     },
//     {
//     "id": 18,
//     "name": "Karin",
//     "age": 9.5,
//     "sex": "f"
//     },

// 8+D*0.01

/*
    @param1 = herdList
    @param2 = day for which order be delivered
    @info: A Yak can produce 50-D*0.03 liters of milk (D = age in days).
           Also the age of the yak is 1 year = 100 days
*/
const getTotalMilk = (herdList: Yak[], day: number): number => {
  return herdList.reduce(
    (total, current) =>
      current.sex === "f" ? 50 - current.age * 100 * 0.03 + total : total,
    0
  );
};

/*
    @param1 = herdList
    @param2 = day for which order be delivered
    @info: At most every 8+D*0.01 days you can again shave a Yak (D = age in days).
*/
const getTotalSkins = (herdList: Yak[], day: number): number => {
  return herdList.reduce(
    (total, current) =>
      current.sex === "f" ? 8 - current.age * 0.01 + total : total,
    0
  );
};

export { getTotalMilk, getTotalSkins };
