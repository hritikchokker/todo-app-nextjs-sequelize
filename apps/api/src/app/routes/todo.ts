import * as express from 'express';
import {
  createTask,
  fetchAllTasks,
  fetchTaskById,
  removeAll,
  removeTask,
  updateTask,
} from '../controllers/todoController';
import URL from '../constants/api-urls';
import { authHandler } from '../middlewares/authentication';
const todoRouter = express.Router();

// fetch all
todoRouter.get(URL.TODO_URLS.ROOT, authHandler, fetchAllTasks);
// creates new
todoRouter.post(URL.TODO_URLS.ROOT, authHandler, createTask);

// remove all
todoRouter.delete(URL.TODO_URLS.ROOT, authHandler, removeAll);

// fetch by id
todoRouter.get(URL.TODO_URLS.PARAM, authHandler, fetchTaskById);

// update by id
todoRouter.put(URL.TODO_URLS.PARAM, authHandler, updateTask);
todoRouter.patch(URL.TODO_URLS.PARAM, authHandler, updateTask);
todoRouter.delete(URL.TODO_URLS.PARAM, authHandler, removeTask);

export default todoRouter;
