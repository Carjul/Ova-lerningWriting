import { Router } from "express";
import {GetUser,GetUserId,postUser,putUser,deleteUser} from "../controllers/controllerUser.js";
import isAuthenticated from "../helper/auth.js";

const routeUser = Router()

routeUser.get('/usuario',isAuthenticated,GetUser)
routeUser.get('/usuario/:id',isAuthenticated,GetUserId)
routeUser.post('/usuario',postUser)
routeUser.put('/usuario/:id',isAuthenticated,putUser)
routeUser.delete('/usuario/:id',isAuthenticated,deleteUser)



export default routeUser;