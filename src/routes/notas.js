import { Router } from "express";
import {GetNota,postNota,deleteNota} from "../controllers/controllersNotas.js";
import isAuthenticated from "../helper/auth.js";

const routeNotas = Router()

routeNotas.get('/notas',isAuthenticated,GetNota)
routeNotas.post('/notas/:id',isAuthenticated,postNota)
routeNotas.delete('/notas/:id',isAuthenticated,deleteNota)



export default routeNotas;