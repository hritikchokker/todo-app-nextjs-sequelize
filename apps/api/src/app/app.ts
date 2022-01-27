import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import router from './routes';
// import  benchmarks from './middlewares/benchmark';
const app = express();

app.use(cors());
// body parser
app.use(express.json());
// Cross origin request handler
// app.use(cors);
// app.use(benchmarks);
app.use(morgan('combined'));
app.use(router);

export default app;
