import { response } from "express";
import bcrypt from 'bcryptjs';
import Usuario from '../models/Usuario.js';


const get_usuarios = async(req, res = response) => {
    const id = req.params.id;

    if (id) {
        const usuario_doc = await Usuario.findOne({ id, estado: true });
        if (usuario_doc) {
            res.json({
                status: 'success',
                message: 'get Api',
                data: usuario_doc
            });
        } else {
            res.json({
                status: 'error',
                message: 'User not found',
                data: []
            });
        }
    } else {
        res.json({
            status: 'error',
            message: 'get Api',
            data: []
        });
    }
}

const post_usuarios = async(req, res = response) => {

    try {

        const { nombre, correo, password, rol } = req.body;
        const usuario = new Usuario({ nombre, correo, password, rol });

        //Encriptacion de password
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);


        await usuario.save();
        res.json({
            status: 'success',
            message: 'add usuario',
            data: usuario
        });

    } catch (error) {
        console.log(error);
    }
}

const put_usuarios = async(req, res = response) => {
    const id = req.params.id;

    const { _id, password, google, correo, ...usuario } = req.body;
    const usuario_doc = await Usuario.findOne({ id, estado: true });

    if (usuario_doc) {

        if (password) {
            const salt = bcrypt.genSaltSync();
            usuario.password = bcrypt.hashSync(typeof(password), salt);
        }

        const usuario_update = await Usuario.findByIdAndUpdate(id, usuario);

        res.json({
            status: 'success',
            message: 'usuario editado correctamente',
            data: usuario_update
        });

    } else {
        res.json({
            status: 'error',
            message: 'El usuario ingresado no se encuentra registrado.',
            data: []
        });
    }
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