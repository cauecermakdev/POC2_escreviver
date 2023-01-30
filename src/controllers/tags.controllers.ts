
import { Tags } from "@prisma/client";
import { Request, Response} from "express";
import { existTag, findManyTag,insertUniqueTag, updateTagUnique } from "../repository/tag.repository.js";


async function insertTag(req:Request, res:Response){
    
    const newTag = req.body as Tags;

    const result = await insertUniqueTag(newTag);
    return res.send(`Tag inserted ${result}`);
}


async function updateTag(req:Request, res:Response){
    const {id,name} = req.body;

    if(!await existTag(id)){
        return res.status(200).send("não existe tag com esse id");
    }

    await updateTagUnique(id,name);

    return res.send("Tag atualizada");

}

async function listAllTag(req:Request, res:Response){
        console.log("entra listAllTag function")
        const resultadoTags = await findManyTag() as Tags[];
        console.log(resultadoTags)
        return res.send(resultadoTags);
}


export{
    listAllTag,
    insertTag,
    updateTag
}