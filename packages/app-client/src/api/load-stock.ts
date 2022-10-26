import { types } from "app-server";
import { BASE_URL } from ".";

async function loadStock(): Promise<types.ILoadStock> {
  const data = await fetch(BASE_URL + "/stock").then((resp) => resp.json());
  return data;
}

export { loadStock };
