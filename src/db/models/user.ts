import { Model, DataTypes, Sequelize } from "sequelize";

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "ROLE_DEVELOPER" | "ROLE_ADMIN" | "ROLE_USER";
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export default (sequelize: Sequelize) => {
  return sequelize.define<Model<UserAttributes>>(
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
      paranoid: true,
      timestamps: true,
      modelName: "user",
      tableName: "user",
      schema: "main",
      freezeTableName: true,
    }
  );
};
