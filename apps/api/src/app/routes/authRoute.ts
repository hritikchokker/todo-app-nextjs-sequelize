import * as express from 'express';
import { loginHandler, registerHandler } from '../controllers/authController';
const authRouter = express.Router();
authRouter.post('/api/auth/login', loginHandler);
authRouter.post('/api/auth/register', registerHandler);
export default authRouter;
