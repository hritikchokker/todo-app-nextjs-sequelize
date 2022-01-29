import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import { createHashSync } from '../utils/hashManager';
export const UserModel = sequelize.define(
  'user',
  {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 4,
        max: 50,
      },
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 4,
        max: 50,
      },
    },
    uid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      set() {
        this.setDataValue('createdAt', new Date().toISOString());
      },
    },
    password: {
      type: DataTypes.TEXT,
      set(value) {
        // Storing passwords in plaintext in the database is terrible.
        // Hashing the value with an appropriate cryptographic hash function is better.
        this.setDataValue('password', createHashSync(value as string));
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      set() {
        this.setDataValue('updatedAt', new Date().toISOString());
      },
    },
  },
  {
    freezeTableName: true,
  }
);
sequelize.models.UserModel = UserModel;
