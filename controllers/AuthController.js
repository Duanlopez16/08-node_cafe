import { response } from "express";
import User from "../models/Usuario.js";
import bcrypt from 'bcryptjs';


const login = async(req, res = response) => {
    const { email, password } = req.body;
    try {
        const getUser = await User.findOne({ correo: email });
        if (getUser) {
            if (getUser.estado) {
                const validPassword = bcrypt.compareSync(password, getUser.password);
                if (validPassword) {
                    res.json({
                        status: 'success',
                        message: 'ok',
                        data: []
                    });
                } else {
                    res.status(400).json({
                        status: 'error',
                        message: 'user or password invalid',
                        data: []
                    });
                }
            } else {
                res.status(400).json({
                    status: 'error',
                    message: 'user deactivate',
                    data: []
                });
            }
        } else {
            res.status(400).json({
                status: 'error',
                message: 'userNotFound',
                data: []
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'error',
            data: []
        });
    }
}



export {
    login
}