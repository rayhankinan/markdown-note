import express, { Express } from "express";
import { DataSource } from "typeorm";
import cors from "cors";
import mongoose from "mongoose";
import serverConfig from "@config/server";
import corsConfig from "@config/cors";
import postgresConfig from "@config/postgres";
import mongoConfig from "@config/mongo";
import "reflect-metadata";

class App {
    server: Express;
    dataSource: DataSource;

    constructor() {
        this.server = express();
        this.dataSource = new DataSource(postgresConfig);

        this.server.use(
            express.json(),
            express.urlencoded({ extended: true }),
            cors(corsConfig)
        );
    }

    async run() {
        await Promise.all([
            this.dataSource.initialize(),
            mongoose.connect(mongoConfig.URI),
        ]);

        this.server.listen(serverConfig.port, () => {
            console.log(
                `Server is running on http://${serverConfig.host}:${serverConfig.port}`
            );
        });
    }
}

const app = new App();

export default app;
