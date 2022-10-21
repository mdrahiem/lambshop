export type Yak = {
  id: number;
  name: string;
  age: number;
  sex: string;
};

export interface ILoadStock {
  milk: number;
  skins: number;
}

export interface IOrderPayload extends ILoadStock {
  customer: string;
  days: number;
}
