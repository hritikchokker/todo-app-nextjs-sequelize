import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
export const TodoModel = sequelize.define(
  'todo',
  {
    task: {
      type: DataTypes.TEXT,
    },
    creater: {
      type: DataTypes.TEXT,
    },
    uid: {
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
(async function () {
  await TodoModel.sync();
})();
sequelize.models.TodoModel = TodoModel;
