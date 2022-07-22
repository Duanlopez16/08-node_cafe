import Rol from "../models/Rol.js"

const validar_rol = async(req, res, next) => {
    const { rol: nombre } = req.body;
    const doc_rol = await Rol.findOne({ nombre });
    if (!doc_rol) {
        res.status(400).json({
            status: 'error',
            message: 'El rol ingresado no es valido.'
        });
    }
    next();
}

export { validar_rol }