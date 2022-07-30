import Rol from "../models/Rol.js"
import Usuario from "../models/Usuario.js";

const validar_rol = async(rol) => {
    const doc_rol = await Rol.findOne({ 'nombre': rol });
    if (!doc_rol) {
        throw new Error('El rol ingresado no se encutra registrado.');
    }
}

const validar_email = async(correo) => {
    const email_doc = await Usuario.findOne({ correo });
    if (email_doc) {
        throw new Error('el email ingresado ya se encuentra registrado.');
    }
}


export { validar_rol, validar_email }