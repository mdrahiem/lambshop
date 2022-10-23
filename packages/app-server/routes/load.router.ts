import express from "express";
import type { Request, Response } from "express";

import * as LoadService from "../services";
import xmlParser from "../utils/xml-parser";

export const loadRouter = express.Router();

loadRouter.post(
  "/",
  xmlParser,
  async (request: Request, response: Response) => {
    try {
      await LoadService.createHerdList(request.body.herd.labyak);
      return response.status(205).send("Data inserted and content reset.");
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);
