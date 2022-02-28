import { Sequelize } from 'sequelize-typescript';
import { Todo } from '../todo/entities/todo.entity';
import { UserSession } from '../user/entities/session.entity';
import { User } from '../user/entities/user.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345',
        database: 'todo-app',
        logging: console.log,
      });
      sequelize.addModels([User, UserSession, Todo]);
      User.hasMany(UserSession);
      User.hasMany(Todo);
      Todo.belongsTo(User);
      UserSession.belongsTo(User);
      // await sequelize.sync();
      await sequelize.sync({ force: true });
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
