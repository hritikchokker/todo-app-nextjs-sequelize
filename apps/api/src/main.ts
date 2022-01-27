import app from './app/app';
// import * as cluster from 'cluster';
// const clusterModule: any = cluster;
import sequelize from './app/database/connection';
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
// database connection
(async function () {
  try {
    await sequelize.authenticate();

    // const { TodoModel } = sequelize.models;
    // await TodoModel.sync();
    console.log('connected to db');
  } catch (error) {
    console.error('connection to DB failed', error);
  }
})();
server.on('error', console.error);
// let CPUS_COUNT = 0;
// if (clusterModule.isPrimary) {
//   if (CPUS_COUNT < 4) {
//     CPUS_COUNT--;
//     console.log('new cluster forked');
//     clusterModule.fork();
//   }
// } else {

// }
