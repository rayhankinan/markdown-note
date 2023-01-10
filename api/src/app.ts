import express, { Express } from "express";

class App {
    server: Express;

    constructor() {
        this.server = express();
    }

    run() {
        this.server.listen(3000);
    }
}

const app = new App();

export default app;
