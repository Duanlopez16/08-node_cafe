import { Router } from "express";
import {
    delete_usuario,
    get_usuarios,
    post_usuarios,
    put_usuarios
} from "../controllers/userController.js";

const router = Router();

router.get('/', get_usuarios);

router.post('/', post_usuarios);

router.put('/:id', put_usuarios);

router.delete('/', delete_usuario);

router.get('*', (req, res) => {
    res.send('pagina no encontrada.');
});

export { router }