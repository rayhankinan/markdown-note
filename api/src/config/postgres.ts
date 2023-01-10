import { DataSourceOptions } from "typeorm";
import User from "@entities/postgresql/user";
import Admin from "@entities/postgresql/admin";
import Viewer from "@entities/postgresql/viewer";
import Major from "@entities/postgresql/major";

const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOSTNAME || "localhost",
    port: +process.env.POSTGRES_PORT || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    cache: {
        type: "redis",
        options: {
            socket: {
                host: process.env.REDIS_HOSTNAME || "localhost",
                port: +process.env.REDIS_PORT || 6379,
            },
        },
    },
    synchronize: true,
    logging: true,
    entities: [User, Admin, Viewer, Major],
    subscribers: [],
    migrations: [],
};

export default dataSourceOptions;
