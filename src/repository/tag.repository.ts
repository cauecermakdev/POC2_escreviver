import { TextoType} from "../protocols/texto.js";
import { TagType } from "../protocols/tag.js";
//import jobs from "../database/data.js";//usando dados pelo data.js
import { Response } from "express";
//import { connection } from "../database/database.js"; //usando bd pelo postgres
import { QueryResult } from "pg";

import prisma from "../config/database.js";
import {Tags} from "@prisma/client";

    async function findManyTag(): Promise<Tags[]>{
    //   return connection.query(
    //   `
    //   SELECT * FROM tags;
    //   `);
    const data = await prisma.tags.findMany();
    console.log(data);
    return data;
    
    }


    async function insertUniqueTag(tag:TagType):Promise<TagType>{
    //   return connection.query(` 
    //     INSERT INTO tags (name) VALUES ($1)  
    //   `,
    //   [tag.name])
    const data = await prisma.tags.create({
        data: tag
    });

    return data;

    }


    async function existTag(idSearch:number):Promise<boolean>{
        // const result  = await connection.query(` 
        //     SELECT tags.name FROM tags WHERE tags.id = ($1)  
        // `,
        // [id])

        const data = await prisma.tags.findMany({
            where: {
                id: idSearch,
            },
        }
        );
        console.log("existTag function, data: ", data);

        if(data){
            return true;
        }else{
            return false;
        }
    }

    async function updateTagUnique(idSearch:number, name:string){
        // const result  = connection.query(` 
        //     UPDATE tags SET name = $1 WHERE tags.id = ($2)  
        // `,
        // [name, id])

        const tag = {
            id:idSearch,
            name: name,
        }

        await prisma.tags.upsert(
            {
                where: {
                    id:idSearch,
                },
                create: tag as TagType,
                update: tag
            }
        )
    }

    export{
        findManyTag,
        insertUniqueTag,
        existTag,
        updateTagUnique
    }
