import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development";
const config = require("./db-config.js")[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

export default sequelize;