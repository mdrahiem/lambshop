import { IOrderPayload } from "app-server/types";
import { BASE_URL } from ".";

async function createOrder(orderData: IOrderPayload) {
  const { days, customer, milk, skins } = orderData;
  console.log(days, customer, milk, skins);

  const data = await fetch(BASE_URL + "/order/" + days, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer,
      milk,
      skins,
    }),
  }).then((resp) => resp.json());
  return data;
}

export { createOrder };
