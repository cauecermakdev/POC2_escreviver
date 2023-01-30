import { Textos, Tags } from "@prisma/client";
import { Request, Response } from "express";

import {
  deleteTextoUnique,
  findManyTexto,
  insertUniqueTexto,
} from "../repository/texto.repository.js";

async function listAllTexto(req: Request, res: Response) {
  const resultadoTexto = await findManyTexto();

  return res.send(resultadoTexto);
}

async function insertTexto(req: Request, res: Response) {
  const newTexto = req.body as Textos;

  const result = (await insertUniqueTexto(newTexto)) as Textos;
  return res.send(`Text inserted ${result}`);
}

async function deleteTexto(req: Request, res: Response) {
  const id = Number(req.query.id);
  const msgDelete: string = await deleteTextoUnique(id);
  return res.send(msgDelete);

  //const result = await insertUniqueTexto(newTexto);
  //return res.send(`Text inserted ${result.rows}`);
}

export { listAllTexto, insertTexto, deleteTexto };
