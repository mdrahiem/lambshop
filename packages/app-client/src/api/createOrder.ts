import { IOrderPayload } from "app-server/types";
import { BASE_URL } from ".";

async function createOrder(orderData: IOrderPayload) {
  const data = await fetch(BASE_URL + "/order/" + orderData.days, {
    method: "POST",
  }).then((resp) => resp.json());
  return data;
}

export { createOrder };
