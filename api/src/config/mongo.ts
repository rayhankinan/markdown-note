const dataConfig: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    bucket: string;
} = {
    host: process.env.MONGO_INITDB_HOSTNAME || "localhost",
    port: +process.env.MONGO_INITDB_PORT || 27017,
    username: process.env.MONGO_INITDB_USERNAME || "root",
    password: process.env.MONGO_INITDB_PASSWORD,
    database: process.env.MONGO_INITDB_DATABASE,
    bucket: process.env.GRIDFS_BUCKET,
};

const mongoConfig: { URI: string; bucket: string } = {
    URI: `mongodb://${dataConfig.username}:${dataConfig.password}@${dataConfig.host}:${dataConfig.port}/${dataConfig.database}`,
    bucket: dataConfig.bucket,
};

export default mongoConfig;
