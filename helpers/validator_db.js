import Rol from "../models/Rol.js"
import Usuario from "../models/Usuario.js";
import mongoose from "mongoose";

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

const validar_usuario_id = async(id) => {
    const usuario_doc = await Usuario.findById(id);
    if (!usuario_doc) {
        throw new Error('No se encontro registrado un usuario con el id ingresado.');
    }
}

const validar_id = (id) => {

}


export { validar_rol, validar_email, validar_usuario_id }