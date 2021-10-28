require("dotenv").config();

module.export = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    operatorsAliases: "0",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
