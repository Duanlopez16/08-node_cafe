import { Router } from "express";
import { body } from "express-validator";
import { get_roles, post_roles } from "../controllers/RolController.js";
import { validar_campos } from "../middelwares/validar-campos.js";

const router_rol = Router();

router_rol.post('/', [
        body('nombre', 'El nombre  es requerido.').notEmpty(),
        validar_campos
    ],
    post_roles);

router_rol.get('/', get_roles);

export { router_rol }