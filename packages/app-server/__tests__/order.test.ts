import request from "supertest";
import { app } from "..";
import successOrderPayload from "./mocks/order-success-payload.json";
import successFullStockOrderPayload from "./mocks/order-success-full-stock-payload.json";
import partialSuccessOrderPayload from "./mocks/order-partial-success-payload.json";
import failedOrderPayload from "./mocks/order-failed-payload.json";
import { initialXMLData } from "../baseData";

test("Should throw 201 in case of successful order", async () => {
  await request(app)
    .post("/lamb-shop/load")
    .set("Content-Type", "application/xml")
    .send(initialXMLData);
  const result = await request(app)
    .post("/lamb-shop/order/3")
    .send(successOrderPayload);
  expect(result.status).toBe(201);
  expect(result.body).toStrictEqual(successOrderPayload);
});

test("Should throw 201 in case of full stock order", async () => {
  await request(app)
    .post("/lamb-shop/load")
    .set("Content-Type", "application/xml")
    .send(initialXMLData);
  const result = await request(app)
    .post("/lamb-shop/order/3")
    .send(successFullStockOrderPayload);
  expect(result.status).toBe(201);
  expect(result.body).toStrictEqual(successFullStockOrderPayload);
});

test("Should throw 206 in case of partial success order", async () => {
  await request(app)
    .post("/lamb-shop/load")
    .set("Content-Type", "application/xml")
    .send(initialXMLData);
  const result = await request(app)
    .post("/lamb-shop/order/3")
    .send(partialSuccessOrderPayload);
  expect(result.status).toBe(206);
  expect(result.body).toStrictEqual({
    milk: 20,
  });
});

test("Should throw 404 in case of failed order", async () => {
  await request(app)
    .post("/lamb-shop/load")
    .set("Content-Type", "application/xml")
    .send(initialXMLData);
  const result = await request(app)
    .post("/lamb-shop/order/3")
    .send(failedOrderPayload);
  expect(result.status).toBe(404);
});
