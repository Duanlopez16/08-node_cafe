import Rol from "../models/Rol.js"

const validar_rol = async(rol) => {
    const doc_rol = await Rol.findOne({ 'nombre': rol });
    if (!doc_rol) {
        throw new Error('El rol ingresado no se encutra registrado.');
    }
}



export { validar_rol }