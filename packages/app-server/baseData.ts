interface IYak {
  name: string;
  age: number;
  sex: "f" | "m";
}

interface IHerd {
  herd: IYak[];
}

const initialXMLData = `<herd>
<labyak name="Betty-1" age="4" sex="f" />
<labyak name="Betty-2" age="8" sex="f" />
<labyak name="Betty-3" age="9.5" sex="f" />
</herd>`;

const initData: IYak[] = [
  {
    name: "Betty",
    age: 4,
    sex: "f",
  },
  {
    name: "Mariya",
    age: 8,
    sex: "f",
  },
  {
    name: "Karin",
    age: 9.5,
    sex: "f",
  },
  // {
  //   name: "Taniqua",
  //   age: 3,
  //   sex: "f",
  // },
  // {
  //   name: "Milvi",
  //   age: 1.5,
  //   sex: "f",
  // },
  // {
  //   name: "Thor",
  //   age: 2,
  //   sex: "m",
  // },
  // {
  //   name: "Fotis",
  //   age: 6,
  //   sex: "m",
  // },
  // {
  //   name: "Kyle",
  //   age: 9.8,
  //   sex: "m",
  // },
  // {
  //   name: "Vilm",
  //   age: 3.2,
  //   sex: "m",
  // },
  // {
  //   name: "Rakel",
  //   age: 5.5,
  //   sex: "f",
  // },
  // {
  //   name: "Basmat",
  //   age: 3.8,
  //   sex: "f",
  // },
  // {
  //   name: "Marthe",
  //   age: 7.5,
  //   sex: "f",
  // },
];

export { initData, IYak, IHerd, initialXMLData };
