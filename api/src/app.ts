import express, { Express } from "express";
import { DataSource } from "typeorm";
import "reflect-metadata";

class App {
    server: Express;
    dataSource: DataSource;

    constructor() {
        this.server = express();
    }

    async run() {
        this.server.listen(3000);
    }
}

const app = new App();

export default app;
