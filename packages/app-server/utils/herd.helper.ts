import { Yak } from "../types";

function getAgeLastShaved(age: number, requestedDay: number) {
  const minDaysToBeShavedAgain = Math.round(8 + age * 100 * 0.01) + 1; // not on the day but next day
  const numberOfTimesShavedBefore = Math.floor(
    requestedDay / minDaysToBeShavedAgain
  );

  return age + (numberOfTimesShavedBefore * minDaysToBeShavedAgain) / 100;
}

function getHerdsFromHerdList(herdList: Yak[], requestedDay: number) {
  return herdList.map((herd) => ({
    name: herd.name,
    age: herd.age + Number(requestedDay / 100),
    "age-last-shaved": getAgeLastShaved(herd.age, requestedDay),
  }));
}

export { getHerdsFromHerdList };
