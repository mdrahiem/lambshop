import { getTotalMilk, getTotalSkins } from "./stock.helper";

const initData = [
  {
    id: 1,
    name: "Betty",
    age: 4,
    sex: "f",
  },
  {
    id: 2,
    name: "Mariya",
    age: 8,
    sex: "f",
  },
  {
    id: 3,
    name: "Karin",
    age: 9.5,
    sex: "f",
  },
];

test("Return correct milk stock for 0 days", async () => {
  const milkInStock = await getTotalMilk(initData);
  expect(milkInStock).toBe(85.5);
});

test("Return correct milk stock for 13 days", async () => {
  const milkInStock = await getTotalMilk(initData, [], 13);
  expect(milkInStock).toBe(1104.48);
});

test("Return correct milk stock for 14 days", async () => {
  const milkInStock = await getTotalMilk(initData, [], 14);
  expect(milkInStock).toBe(1188.81);
});

test("Return correct skins stock for 0 days", async () => {
  const skinsInStock = await getTotalSkins(initData);
  expect(skinsInStock).toBe(3);
});

test("Return correct skins stock for 13 days", async () => {
  const skinsInStock = await getTotalSkins(initData);
  expect(skinsInStock).toBe(3);
});

test("Return correct skins stock for 14 days", async () => {
  const skinsInStock = await getTotalSkins(initData, [], 14);
  expect(skinsInStock).toBe(4);
});
