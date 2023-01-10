import express, { Express } from "express";

class App {
    server: Express;

    constructor() {
        this.server = express();
    }

    run() {
        this.server.listen();
    }
}

const app = new App();
export default app;
