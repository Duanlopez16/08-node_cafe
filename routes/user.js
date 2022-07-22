import { Router } from "express";
import { body } from "express-validator";
import {
    delete_usuario,
    get_usuarios,
    post_usuarios,
    put_usuarios
} from "../controllers/UserController.js";
import { validar_campos } from "../middelwares/validar-campos.js";
import { validar_rol } from "../middelwares/validar-roles.js";

const router = Router();

router.get('/', get_usuarios);

router.post('/', [
    body('nombre', 'El nombre  es requerido.').notEmpty(),
    body('correo', 'El correo es requerido.').notEmpty(),
    body('correo', 'El correo no es valido.').isEmail(),
    body('password', 'El password es requerido.').notEmpty(),
    body('password', 'Password debe ser de minimo 6 caracteres').isLength({ min: 6 }),
    body('rol', 'El rol es requerido.').notEmpty(),
    validar_campos,
    validar_rol
], post_usuarios);

router.put('/:id', put_usuarios);

router.delete('/', delete_usuario);

router.get('*', (req, res) => {
    res.send('pagina no encontrada.');
});

export { router }