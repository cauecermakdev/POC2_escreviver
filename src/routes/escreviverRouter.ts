import { Router } from "express";
import { insertMindStates, listAllMindStates } from "../controllers/mindstates.controllers.js";
import { insertTag, listAllTag, updateTag } from "../controllers/tags.controllers.js";
import { deleteTexto, insertTexto, listAllTexto } from "../controllers/textos.controllers.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import { mindstateSchema } from "../schemas/mindstateSchema.js";
import { tagSchema } from "../schemas/tagSchema.js";
import { textoSchema } from "../schemas/textoSchema.js";



const escreviverRouter = Router();

escreviverRouter.get('/tags', listAllTag);
escreviverRouter.get('/textos', listAllTexto);
escreviverRouter.get('/mindstates',listAllMindStates);

escreviverRouter.post('/tags',validateSchemaMiddleware(tagSchema),insertTag);
escreviverRouter.post('/textos',validateSchemaMiddleware(textoSchema), insertTexto);
escreviverRouter.post('/mindstates',validateSchemaMiddleware(mindstateSchema), insertMindStates);

escreviverRouter.delete('/textos',deleteTexto);
escreviverRouter.put('/tags',updateTag);

export default escreviverRouter;