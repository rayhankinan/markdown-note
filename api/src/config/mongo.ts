import { DataSourceOptions } from "typeorm";
import File from "entities/mongodb/file";

const mongoConfig: DataSourceOptions = {
    type: "mongodb",
    host: process.env.MONGO_INITDB_HOSTNAME || "localhost",
    port: +process.env.MONGO_INITDB_PORT || 27017,
    username: process.env.MONGO_INITDB_USERNAME || "root",
    password: process.env.MONGO_INITDB_PASSWORD,
    database: process.env.MONGO_INITDB_DATABASE,
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
    entities: [File],
    subscribers: [],
    migrations: [],
};

export default mongoConfig;
