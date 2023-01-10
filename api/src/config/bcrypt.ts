const bcryptConfig: { saltRounds: number } = {
    saltRounds: +process.env.SALT_ROUNDS || 10,
};

export default bcryptConfig;
