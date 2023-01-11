import cluster from "cluster";
import http from "http";
import process from "process";
import os from "os";

import express, { Express } from "express";
import { DataSource } from "typeorm";
import compression from "compression";
import cors from "cors";
import "reflect-metadata";

import serverConfig from "@config/server";
import corsConfig from "@config/cors";
import postgresConfig from "@config/postgres";
import mongoConfig from "@config/mongo";

class Server {
    private app: Express;
    private dataSource: DataSource;
    private objectSource: DataSource;

    constructor() {
        this.app = express();
        this.dataSource = new DataSource(postgresConfig);
        this.objectSource = new DataSource(mongoConfig);

        this.app.use(
            express.json(),
            express.urlencoded({ extended: true }),
            cors(corsConfig),
            compression()
        );
    }

    async run() {
        if (cluster.isPrimary) {
            await Promise.all([
                this.dataSource.initialize(),
                this.objectSource.initialize(),
            ]);

            console.log(`Primary ${process.pid} is running`);

            const cpus = os.cpus();
            for (let i = 0; i < cpus.length; i++) {
                cluster.fork();
            }

            cluster.on("exit", (worker, code, signal) => {
                console.log(
                    `Worker ${worker.process.pid} died: ${code} ${signal}`
                );
            });
        } else {
            http.createServer(this.app).listen(serverConfig.port);

            console.log(`Worker ${process.pid} started`);
        }
    }
}

const server = new Server();

export default server;
