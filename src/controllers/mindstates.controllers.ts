import { Tags, MindStates } from "@prisma/client";
import { Request, Response } from "express";
import {
  findManyMindState,
  insertUniqueMindState,
} from "../repository/mindstate.repository.js";
import { findManyTag, insertUniqueTag } from "../repository/tag.repository.js";

async function listAllMindStates(req: Request, res: Response) {
  const resultadoMindStates = (await findManyMindState()) as Tags[];

  return res.send(resultadoMindStates);
}

async function insertMindStates(req: Request, res: Response) {
  const newMindStates = req.body as MindStates;

  const result = await insertUniqueMindState(newMindStates);
  return res.send(`MindState inserted ${result}`);
}

export { listAllMindStates, insertMindStates };
