import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import { TodoModel } from './todo';
export const UserModel = sequelize.define(
  'user',
  {
    firstName: {
      type: DataTypes.TEXT,
    },
    lastName: {
      type: DataTypes.TEXT,
    },
    uid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    email: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      type: DataTypes.DATE,
      set() {
        this.setDataValue('createdAt', new Date().toISOString());
      },
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
(async function(){
  await UserModel.sync();
}());
UserModel.hasMany(TodoModel, { foreignKey: 'uid' });
sequelize.models.UserModel = UserModel;
