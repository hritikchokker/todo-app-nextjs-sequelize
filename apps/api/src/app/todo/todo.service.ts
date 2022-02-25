import { Inject, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { HttpResponseService } from '../shared/services/http-response/http-response.service';
import { User } from '../user/entities/user.entity';
import { Todo } from './entities/todo.entity';
import { v4 } from 'uuid';
@Injectable()
export class TodoService {
  constructor(
    @Inject('TODO_REPOSITORY') private readonly todoModel: typeof Todo,
    @Inject('USER_REPOSITORY') private readonly userModel: typeof User,
    private readonly httpResponse: HttpResponseService
  ) {}
  async create(req, taskDetails: any, res) {
    try {
      if (req?.userId) {
        const user = await this.userModel.findByPk(req?.userId);
        if (!user) {
          this.httpResponse.sendResponse(res, 401, {
            error: 'token expired login again',
          });
          return;
        }
        taskDetails.taskId = v4();
        const rss = await this.todoModel.create(
          {
            ...taskDetails,
            userUid:req?.userId
          },
          { include: [User] }
        );
        this.httpResponse.sendResponse(res, 201, {
          message: 'task created succefsul',
          data: rss.toJSON(),
        });
        return;
      }
      this.httpResponse.sendResponse(res, 400, {});
    } catch (error) {
      console.log(error, 'er');
      this.httpResponse.sendError(error, res);
    }
  }

  async findAll(req, res: Response) {
    try {
      const ress = await this.todoModel.findAll();
      this.httpResponse.sendResponse(res, 200, {
        message: 'list fetched successfully',
        data: ress,
      });
    } catch (error) {
      this.httpResponse.sendResponse(res, 400, { error });
    }
  }

  async findOne(req, id: string, res: Response) {
    try {
      const s = await this.todoModel.findByPk(id);
      this.httpResponse.sendResponse(res, 200, {
        message: 'item found',
        data: s.toJSON(),
      });
    } catch (error) {
      this.httpResponse.sendResponse(res, 400, { error });
    }
  }

  async update(req, id: string, todoDetails: any, res: Response) {
    try {
      const task = await this.todoModel.update(todoDetails, {
        where: { taskId: id },
      });
      this.httpResponse.sendResponse(res, 201, {
        message: 'task updated succesfully',
        data: task,
      });
    } catch (error) {
      this.httpResponse.sendError(error, res);
    }
  }

  async remove(req, id: string, res: Response) {
    try {
      await this.todoModel.destroy({ where: { taskId: id } });
      this.httpResponse.sendResponse(res, 200, {
        message: 'removed successfully',
      });
    } catch (error) {
      this.httpResponse.sendError(error, res);
    }
  }
}
