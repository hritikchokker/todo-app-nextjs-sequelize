import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('todo-app', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  logging:console.log
});
export default sequelize;
