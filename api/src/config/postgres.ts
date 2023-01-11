import { DataSourceOptions } from "typeorm";
import User from "@entities/user";
import Admin from "@entities/admin";
import Viewer from "@entities/viewer";
import Major from "@entities/major";
import Course from "@entities/course";

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
    entities: [User, Admin, Viewer, Major, Course],
    subscribers: [],
    migrations: [],
};

export default dataSourceOptions;
