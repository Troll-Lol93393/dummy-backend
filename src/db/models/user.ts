import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

export interface UserAttributes {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  password: string;
  uuid: string;
  role: 'ROLE_DEVELOPER' | 'ROLE_ADMIN' | 'ROLE_USER';
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

// Optional fields for creation
export type UserCreationAttributes = Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'uuid'>;

// Sequelize model instance
export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes { }

export const UserModelFactory = (sequelize: Sequelize) => {
  const User = sequelize.define<UserInstance>('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    middleName: {
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
      type: DataTypes.ENUM('ROLE_DEVELOPER', 'ROLE_ADMIN', 'ROLE_USER'),
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
  }, {
    paranoid: true,
    timestamps: true,
    modelName: 'user',
    tableName: 'user',
    schema: 'main',
    freezeTableName: true,
  });

  return User;
};
