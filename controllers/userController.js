import { response } from "express";
import bcrypt from 'bcryptjs';
import Usuario from '../models/Usuario.js';


const get_usuarios = (req, res = response) => {
    const params = req.query;
    res.json({
        status: 'success',
        message: 'get Api',
        params
    });
}

const post_usuarios = async(req, res = response) => {

    try {

        const { nombre, correo, password, rol } = req.body;
        const usuario = new Usuario({ nombre, correo, password, rol });

        const usuario_correo = await Usuario.findOne({ correo });
        if (!usuario_correo) {
            //Encriptacion de password
            const salt = bcrypt.genSaltSync();
            usuario.password = bcrypt.hashSync(typeof(password), salt);


            await usuario.save();
            res.json({
                status: 'success',
                message: 'add usuario',
                data: usuario._id
            });
        } else {
            res.status(400).json({
                status: 'error',
                message: ' El correo ingresado ya existe.',
                data: correo
            });
        }

    } catch (error) {
        console.log(error);
    }
}

const put_usuarios = (req, res = response) => {
    const id = req.params.id;
    res.json({
        status: 'success',
        message: 'put usuario',
        id
    });
}

const delete_usuario = (req, res = response) => {
    res.json({
        status: 'success',
        message: 'delete usuario'
    });
}

export {
    get_usuarios,
    post_usuarios,
    put_usuarios,
    delete_usuario
}