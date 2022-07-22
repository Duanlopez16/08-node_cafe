import { validationResult } from "express-validator"

const validar_campos = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'error',
            message: errors.errors
        });
    }

    next();
}

export { validar_campos }