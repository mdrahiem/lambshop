import { types } from "app-server";

const BASE_URL = "http://localhost:8080/yak-shop";

async function loadStock(): Promise<types.ILoadStock> {
  const { data } = await fetch(BASE_URL + "/stock").then((resp) => resp.json());
  return data;
}

export { loadStock };
