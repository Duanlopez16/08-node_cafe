import { Router } from "express";
import { body, param } from "express-validator";
import {
    delete_usuario,
    get_usuarios,
    post_usuarios,
    put_usuarios
} from "../controllers/UserController.js";
import { validar_email, validar_rol, validar_usuario_id } from "../helpers/validator_db.js";
import { validar_campos } from "../middelwares/validar-campos.js";

const router = Router();

router.get('/', get_usuarios);

router.post('/', [
    body('nombre', 'El nombre  es requerido.').notEmpty(),
    body('correo', 'El correo es requerido.').notEmpty(),
    body('correo', 'El correo no es valido.').isEmail(),
    body('correo').custom(validar_email),
    body('password', 'El password es requerido.').notEmpty(),
    body('password', 'Password debe ser de minimo 6 caracteres').isLength({ min: 6 }),
    body('rol', 'El rol es requerido.').notEmpty(),
    body('rol').custom(validar_rol),
    validar_campos
], post_usuarios);

router.put('/:id', [
    param('id', 'El id ingresado no es valido').isMongoId(),
    param('id').custom(validar_usuario_id),
    body('rol', 'El rol es requerido.').notEmpty(),
    body('rol').custom(validar_rol),
    validar_campos
], put_usuarios);

router.delete('/', delete_usuario);

router.get('*', (req, res) => {
    res.send('pagina no encontrada.');
});

export { router }