//nao é necessario pois o objeto já vem do banco
// vou deixar presente apenas para consulta em novos projetos
import { MindStates } from "@prisma/client"
import { TagType } from "./tag"

export type TextoType = {
    date: Date,//arrumar timestamp format 
    title:string,
    description:string,
    tagName: TagType[],
    nameState: MindStates[],
}
