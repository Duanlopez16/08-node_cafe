import mongoose from "mongoose"

const db_connetion = async() => {
    try {
        await mongoose.connect(process.env.MONGO_KEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexion a base de datos establecida.');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion a base de datos.');
    }
}

export { db_connetion }