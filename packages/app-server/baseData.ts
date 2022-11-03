interface ILamb {
  name: string;
  age: number;
  sex: "f" | "m";
}

interface IHerd {
  herd: ILamb[];
}

const initialXMLData = `<herd>
<lablamb name="Betty-1" age="4" sex="f" />
<lablamb name="Betty-2" age="8" sex="f" />
<lablamb name="Betty-3" age="9.5" sex="f" />
</herd>`;

const partialStockXNLData = `<herd>
<lablamb name="Eddy" age="4" sex="m" />
</herd>`;

const noStockXNLData = `<herd>
<lablamb name="Eddy" age="0" sex="m" />
</herd>`;

const initData: ILamb[] = [
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

export {
  initData,
  ILamb,
  IHerd,
  initialXMLData,
  partialStockXNLData,
  noStockXNLData,
};
