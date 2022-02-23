import { Sequelize } from 'sequelize-typescript';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'todo-app',
        logging: console.log,
      });
      //   sequelize.addModels([Cat]);
      await sequelize.sync();
      console.log('connected to DB');
      return sequelize;
    },
  },
];

// const sequelize = new Sequelize('todo-app', 'postgres', '1234', {
//   host: 'localhost',
//   dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//   logging: console.log,
// });
