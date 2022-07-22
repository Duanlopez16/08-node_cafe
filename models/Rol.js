import mongoose from "mongoose";

const RolSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'nombre es requerido']
    },
    estado: {
        type: Boolean,
        default: true
    },
});

export default mongoose.model('Rol', RolSchema);