import * as express from 'express';
import {
  createTask,
  fetchAllTasks,
  fetchTaskById,
  removeAll,
  updateTask,
} from '../controllers/todoController';
import URL from '../constants/api-urls';
const todoRouter = express.Router();

// fetch all
todoRouter.get(URL.TODO_URLS.ROOT, fetchAllTasks);
// creates new
todoRouter.post(URL.TODO_URLS.ROOT, createTask);

// remove all
todoRouter.delete(URL.TODO_URLS.ROOT, removeAll);

// fetch by id
todoRouter.get(URL.TODO_URLS.PARAM, fetchTaskById);

// update by id
todoRouter.put(URL.TODO_URLS.PARAM, updateTask);
todoRouter.patch(URL.TODO_URLS.PARAM, updateTask);
export default todoRouter;
