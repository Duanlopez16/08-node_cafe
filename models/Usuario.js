import mongoose from "mongoose";

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'nombre es requerido']
    },
    correo: {
        type: String,
        required: [true, 'correo es requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password es requerido'],
        unique: true
    },
    imagen: {
        type: String,
    },
    rol: {
        type: String,
        required: [true, 'rol es requerido'],
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});


UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario } = this.toObject();

    return usuario
}

export default mongoose.model('Usuario', UsuarioSchema);