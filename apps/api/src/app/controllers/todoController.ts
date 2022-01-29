import { TodoModel } from '../models/todo';
import { Request, Response } from 'express';
import { getV4Id } from '../utils/uuidHandler';
import { verifyToken } from '../middlewares/authentication';
export const createTask = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    delete payload.uid;
    payload.taskId = getV4Id();
    if (!payload) {
      res.status(400).json({
        message: 'No Payload Found',
      });
    }
    const { id } = await verifyToken(req?.headers?.authorization);
    if (id) {
      payload.userUid = id;
    }
    const task = await TodoModel.create(payload);
    res.status(201).json({
      message: 'Task added succesfully',
      data: task,
    });
  } catch (error) {
    console.log(error, 'errors ');
    res.status(400).json({
      message: 'something went wrong',
      error,
    });
  }
};

export const fetchAllTasks = async (req: Request, res: Response) => {
  try {
    const { id } = await verifyToken(req?.headers?.authorization);
    const data = await TodoModel.findAll({ where: { userUid: id } });
    res.status(200).json({
      message: 'Task List fetched succesfully',
      data: data,
    });
  } catch (error) {
    console.log(error, 'errors');
    res.status(400).json({
      message: 'something went wrong',
      error,
    });
  }
};

export const removeAll = async (req: Request, res: Response) => {
  try {
    await TodoModel.drop();
    await TodoModel.sync();
    res.status(200).json({
      message: 'Tasks Delete successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: 'something went wrong',
      error,
    });
  }
};

export const fetchTaskById = async (req: Request, res: Response) => {
  try {
    if (!req?.params?.id) {
      res.status(400).json({
        message: 'No Params found for the request',
      });
    }
    const data = await TodoModel.findOne({
      where: { userUid: req?.params?.id },
    });
    res.status(200).json({
      message: 'Task fetched successfully',
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: 'something went wrong',
      error,
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    if (!req?.params?.id) {
      res.status(400).json({
        message: 'No Params found for the request',
      });
    }
    const data = await TodoModel.update(req.body, {
      where: { userUid: req?.params?.id },
    });
    res.status(200).json({
      message: 'Task updated successfully',
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: 'something went wrong',
      error,
    });
  }
};

export const removeTask = async (req: Request, res: Response) => {
  try {
    if (!req?.params?.id) {
      res.status(400).json({
        message: 'No Params found for the request',
      });
    }
    const data = await TodoModel.destroy({
      where: { userUid: req?.params?.id },
    });
    res.status(200).json({
      message: 'Task updated successfully',
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: 'something went wrong',
      error,
    });
  }
};
