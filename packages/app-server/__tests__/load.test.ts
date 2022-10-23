import request from "supertest";
import { app } from "..";
import { initialXMLData } from "../baseData";

test("Should reset herd data and return 205", async () => {
  const result = await request(app)
    .post("/yak-shop/load")
    .set("Content-Type", "application/xml")
    .send(initialXMLData);
  expect(result.status).toBe(205);
});

test.only("Should throw 500 in case of no payload data", async () => {
  const result = await request(app)
    .post("/yak-shop/load")
    .set("Content-Type", "application/xml")
    .send();
  expect(result.status).toBe(500);
});