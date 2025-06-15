import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { UserModelFactory } from './user';
import { UserInstance } from './user';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/db-config.js')[env];

// Setup Sequelize instance
let sequelize: Sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Define DB interface
export interface DB {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  user: ReturnType<typeof UserModelFactory>;
  // Add other models here...
}

// Initialize db object
const db = {} as DB;

// Initialize and register models
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Manually import and initialize models (better typing than dynamic require)
db.user = UserModelFactory(sequelize);

// Call associate methods if defined
Object.values(db).forEach((model: any) => {
  if (model?.associate) {
    model.associate(db);
  }
});

export default db;
