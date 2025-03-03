import { Router } from "express";
import { body, check } from "express-validator";
import { login } from "../controllers/AuthController.js";
import { validar_campos } from "../middelwares/validar-campos.js";

const router_auth = Router();

router_auth.post('/login', [
        body('email', 'email field required').isEmail(),
        body('password', 'password field required').not().isEmpty(),
        validar_campos
    ],
    login);


export { router_auth }