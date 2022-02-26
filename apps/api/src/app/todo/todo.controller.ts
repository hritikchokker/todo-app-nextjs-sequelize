import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Response,
  Req,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from '../guards/jwt.guard';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(
    @Req() req: any,
    @Body() createTodoDto: CreateTodoDto,
    @Response() res
  ) {
    return this.todoService.create(req, createTodoDto, res);
  }

  @UseGuards(JwtGuard)
  @Get()
  findAll(@Response() res, @Req() req) {
    return this.todoService.findAll(req, res);
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Req() req: any, @Param('id') id: string, @Response() res) {
    return this.todoService.findOne(req, id, res);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
    @Response() res
  ) {
    return this.todoService.update(req, id, updateTodoDto, res);
  }

  @UseGuards(JwtGuard)
  @Put(':id')
  updatePut(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
    @Response() res
  ) {
    return this.todoService.update(req, id, updateTodoDto, res);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Req() req: any, @Param('id') id: string, @Response() res) {
    return this.todoService.remove(req, id, res);
  }
}
