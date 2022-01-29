import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import { UserModel } from './user';
export const TodoModel = sequelize.define(
  'todo',
  {
    task: {
      type: DataTypes.TEXT,
      validate: {
        min: 4,
        max: 2000,
      },
      allowNull: false,
    },
    creater: {
      type: DataTypes.TEXT,
      validate: {
        min: 4,
        max: 50,
      },
      allowNull: false,
    },
    taskId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    isImmediate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date().toISOString(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date().toISOString(),
    },
  },
  {
    freezeTableName: true,
  }
);
sequelize.models.TodoModel = TodoModel;
