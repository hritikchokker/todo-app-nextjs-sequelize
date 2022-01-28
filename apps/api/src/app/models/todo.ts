import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import { UserModel } from './user';
export const TodoModel = sequelize.define(
  'todo',
  {
    task: {
      type: DataTypes.TEXT,
    },
    creater: {
      type: DataTypes.TEXT,
    },
    taskId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    isImmediate: {
      type: DataTypes.BOOLEAN,
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
