interface IYak {
  name: string;
  age: number;
  sex: "f" | "m";
}

const db: IYak[] = [
  {
    name: "Betty-1",
    age: 4,
    sex: "f",
  },
  {
    name: "Betty-2",
    age: 8,
    sex: "f",
  },
  {
    name: "Betty-3",
    age: 9.5,
    sex: "f",
  },
];

export { db, IYak };
