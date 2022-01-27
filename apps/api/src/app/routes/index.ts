import * as express from 'express';
import authRouter from './authRoute';
const router = express.Router();
import todoRouter from './todo';
import userRouter from './user';
router.all('/hello', (req, res) => {
  res.send(`<h1>Hello world</h1>`);
});
router.use(todoRouter);
router.use(userRouter);
router.use(authRouter);
// router.route('/api/todo').all(todoRouter.default);
router.all('*', (req, res) => {
  res.status(404).json({
    message: `no route found for ${req.url}`,
  });
});
export default router;
