const cacheConfig: { expirationTime: number } = {
    expirationTime: +process.env.CACHE_EXPIRATION_TIME || 1000,
};

export default cacheConfig;
