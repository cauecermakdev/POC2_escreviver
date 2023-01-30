//import { TextoType} from "../protocols/texto.js";
//import jobs from "../database/data.js";//usando dados pelo data.js
//import { Response } from "express";
//import { connection } from "../database/database.js"; //usando bd pelo postgres
//import { QueryResult } from "pg";
import prisma from "../config/database.js";
import {Textos} from "@prisma/client";


    async function findManyTexto(): Promise<Textos[]>{

        // return connection.query(
        // `
        // SELECT * FROM textos;
        // `);

        const data = await prisma.textos.findMany();
        return data; 
    }


    async function insertUniqueTexto(texto:Textos):Promise<Textos>{
    //   return connection.query(` 
    //     INSERT INTO textos (date, title, description,"tagName") VALUES ($1, $2, $3, $4)  
    //   `,
    //   [texto.date, texto.title, texto.description, texto.tagName])
    
    const data = await prisma.textos.create({
        data: texto 
    });

    return data;

    }


    async function existIdTextos(idSearch:number){
        //  const result =  await connection.query(`
        //     SELECT * FROM ${table} WHERE ${table}.id = $1
        // `,
        // [id]);
        //  console.log(result.rows)
        // return result.rows[0];


        const data = await prisma.textos.findMany({
            where: {
                id: idSearch,
            },
        }
        );
        //console.log("existTag function, data: ", data);

        
        if(data){
            return true;
        }else{
            return false;
        }

    }


    async function deleteTextoUnique(idDelete:number):Promise<string>{

        if(!await existIdTextos(idDelete)){
            return "not deleted";
        }
        
        // connection.query(`
        //     DELETE FROM textos WHERE id = $1
        // `,
        // [id]    
        // )
        // return "deleted"

        await prisma.textos.delete({
            where:{
                id: idDelete,
            }
    }
    )

    return "deleted";

    }


    export{
        findManyTexto,
        insertUniqueTexto,
        deleteTextoUnique
    }
