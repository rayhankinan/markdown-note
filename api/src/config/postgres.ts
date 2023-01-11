import { DataSourceOptions } from "typeorm";
import User from "@models/user";
import Admin from "@models/admin";
import Viewer from "@models/viewer";
import Major from "@models/major";
import Course from "@models/course";
import Lecturer from "@models/lecturer";

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
    entities: [User, Admin, Viewer, Major, Course, Lecturer],
    subscribers: [],
    migrations: [],
};

export default dataSourceOptions;
