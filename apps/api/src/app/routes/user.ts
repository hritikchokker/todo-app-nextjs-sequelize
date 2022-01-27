import * as express from 'express';
const userRouter = express.Router();
userRouter.get('/api/user', (req, res) => {
  res.status(200).json({
    message: 'users lists fetched',
  });
});
userRouter.get('/api/user/test', (req, res) => {
  res.status(200).json({
    message: 'users api works',
  });
});

export default userRouter;
