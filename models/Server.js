import express from "express";
import cors from "cors";
import { router } from "../routes/user.js";
import { db_connetion } from "../database/config.js";

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.user_path = '/api/user';
        //base de datos
        this.connetion_db();
        //middewares
        this.middewares();
        //rutas
        this.routes();
    }

    async connetion_db() {
        await db_connetion();
    }

    routes() {
        this.app.use(this.user_path, router);
    }

    middewares() {
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`listening at http://localhost:${this.port}/`);
        })
    }
}

export { Server }