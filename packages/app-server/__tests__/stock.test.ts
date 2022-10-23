import request from "supertest";
import { app } from "..";
import initialHerdStock from "./mocks/init-stock-response.json";
import {
  partialStockXNLData,
  initialXMLData,
  noStockXNLData,
} from "../baseData";

test("Should return herd initial stock with 200 status", async () => {
  const result = await request(app).get("/yak-shop/stock");
  expect(result.status).toBe(200);
  expect(result.body).toStrictEqual(initialHerdStock);
});

test("Should throw 206 in case of only one of skins or milk available", async () => {
  await request(app)
    .post("/yak-shop/load")
    .set("Content-Type", "application/xml")
    .send(partialStockXNLData);
  const result = await request(app).get("/yak-shop/stock");
  expect(result.status).toBe(206);
});

test("Should throw 204 in case of no stock", async () => {
  await request(app)
    .post("/yak-shop/load")
    .set("Content-Type", "application/xml")
    .send(noStockXNLData);
  const result = await request(app).get("/yak-shop/stock");
  expect(result.status).toBe(204);
});
