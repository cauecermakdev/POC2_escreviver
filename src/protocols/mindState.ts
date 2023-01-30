//nao é necessario pois o objeto já vem do banco
// vou deixar presente apenas para consulta em novos projetos

import { Textos } from "@prisma/client"

export type MindStateType = {
    name:string,
    textos: Textos[],
}
