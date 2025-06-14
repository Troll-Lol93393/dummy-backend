const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    // Create schema if it doesn't exist
    await queryInterface.sequelize.query("CREATE SCHEMA IF NOT EXISTS main;");

    await queryInterface.createTable(
      "user",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        firstName: {
          type: DataTypes.STRING,
        },
        lastName: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        role: {
          type: DataTypes.ENUM("ROLE_DEVELOPER", "ROLE_ADMIN", "ROLE_USER"),
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        deletedAt: {
          allowNull: true,
          type: DataTypes.DATE,
        },
      },
      {
        schema: "main",
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable("user", {
      schema: "main",
    });
  },
};
