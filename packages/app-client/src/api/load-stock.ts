import { types } from "app-server";
import { BASE_URL } from ".";

async function loadStock(days = 0): Promise<types.ILoadStock> {
  const data = await fetch(BASE_URL + "/stock/" + days).then((resp) =>
    resp.json()
  );
  return data;
}

export { loadStock };
