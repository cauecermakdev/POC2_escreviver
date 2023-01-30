import prisma from "../config/database.js";
import { MindStates } from "@prisma/client";

async function findManyMindState(): Promise<MindStates[]> {
  // return connection.query(
  // `
  // SELECT * FROM textos;
  // `);

  const data = await prisma.mindStates.findMany();
  return data;
}

async function insertUniqueMindState(
  mindstate: MindStates
): Promise<MindStates> {
  //   return connection.query(`
  //     INSERT INTO textos (date, title, description,"tagName") VALUES ($1, $2, $3, $4)
  //   `,
  //   [texto.date, texto.title, texto.description, texto.tagName])

  const data = await prisma.mindStates.create({
    data: mindstate,
  });

  return data;
}

async function existIdMindState(nameMindState: string): Promise<boolean> {
  //  const result =  await connection.query(`
  //     SELECT * FROM ${table} WHERE ${table}.id = $1
  // `,
  // [id]);
  //  console.log(result.rows)
  // return result.rows[0];

  const data = await prisma.mindStates.findMany({
    where: {
      name: nameMindState,
    },
  });
  //console.log("existTag function, data: ", data);

  if (data) {
    return true;
  } else {
    return false;
  }
}

async function deleteMindStateUnique(nameMindState: string): Promise<string> {
  if (!(await existIdMindState(nameMindState))) {
    return "not deleted";
  }

  // connection.query(`
  //     DELETE FROM textos WHERE id = $1
  // `,
  // [id]
  // )
  // return "deleted"

  await prisma.mindStates.delete({
    where: {
      name: nameMindState,
    },
  });

  return "deleted";
}

export { findManyMindState, insertUniqueMindState, deleteMindStateUnique };
