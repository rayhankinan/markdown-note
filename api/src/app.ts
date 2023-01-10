import express, { Express } from "express";
import { DataSource } from "typeorm";
import cors from "cors";
import serverConfig from "@config/server";
import corsConfig from "@config/cors";
import postgresConfig from "@config/postgres";
import mongoConfig from "@config/mongo";
import "reflect-metadata";

class App {
    private server: Express;
    private dataSource: DataSource;
    private objectSource: DataSource;

    constructor() {
        this.server = express();
        this.dataSource = new DataSource(postgresConfig);
        this.objectSource = new DataSource(mongoConfig);

        this.server.use(
            express.json(),
            express.urlencoded({ extended: true }),
            cors(corsConfig)
        );
    }

    async run() {
        await Promise.all([
            this.dataSource.initialize(),
            this.objectSource.initialize(),
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
