import { response } from "express";
import Rol from "../models/Rol.js";

const get_roles = async(req, res = response) => {
    const rol = 'admins';
    const doc = await Rol.findOne({ nombre: rol });
    if (doc) {
        res.json(doc);
    } else {
        res.json('no row');
    }
}

const post_roles = async(req, res = response) => {

    try {

        const { nombre } = req.body;
        const rol = new Rol({ nombre });

        await rol.save();
        res.json({
            status: 'success',
            message: 'add rol',
            data: rol._id
        });

    } catch (error) {
        console.log(error);
    }
}

const put_roles = (req, res = response) => {
    const id = req.params.id;
    res.json({
        status: 'success',
        message: 'put usuario',
        id
    });
}

const delete_roles = (req, res = response) => {
    res.json({
        status: 'success',
        message: 'delete usuario'
    });
}

export {
    get_roles,
    post_roles
}