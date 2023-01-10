const serverConfig: { host: string; port: number } = {
    host: process.env.HOSTNAME || "localhost",
    port: +process.env.PORT || 3000,
};

export default serverConfig;
