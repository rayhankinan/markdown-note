import cors from "cors";

const proxyConfig: { host: string; port: number } = {
    host: process.env.SERVER_HOSTNAME || "localhost",
    port: +process.env.SERVER_HTTP_PORT || 80,
};

const allowedOrigins = [`http://${proxyConfig.host}:${proxyConfig.port}`];

const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins,
};

export default corsOptions;
