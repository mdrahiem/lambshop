import express from "express";
import type { Request, Response } from "express";

import * as LoadService from "../services";
import xmlParser from "../utils/xml-parser";
import { z } from "zod";
import { processRequestBody } from "zod-express-middleware";

export const loadRouter = express.Router();

const lambSchema = z.object({
  name: z.string(),
  age: z.preprocess(
    (a) => parseFloat(a as string),
    z.number().min(0).max(9.99)
  ),
  sex: z.enum(["f", "m"]),
});

export const xmlSchema = z.object({
  herd: z.object({
    lablamb: z
      .array(lambSchema, {
        invalid_type_error: "Invalid XML schema.",
      })
      .or(lambSchema),
  }),
});

loadRouter.post(
  "/",
  xmlParser,
  processRequestBody(xmlSchema),
  async (request: Request, response: Response) => {
    try {
      await LoadService.createHerdList(request.body.herd.lablamb);
      return response.status(205).send();
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);
