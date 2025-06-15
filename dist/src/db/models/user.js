"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    return sequelize.define("user", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        firstName: {
            type: sequelize_1.DataTypes.STRING,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
        },
        role: {
            type: sequelize_1.DataTypes.ENUM("ROLE_DEVELOPER", "ROLE_ADMIN", "ROLE_USER"),
        },
        createdAt: {
            allowNull: false,
            type: sequelize_1.DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: sequelize_1.DataTypes.DATE,
        },
        deletedAt: {
            allowNull: true,
            type: sequelize_1.DataTypes.DATE,
        },
    }, {
        paranoid: true,
        timestamps: true,
        modelName: "user",
        tableName: "user",
        schema: "main",
        freezeTableName: true,
    });
};
