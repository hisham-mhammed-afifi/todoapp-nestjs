import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  create(newTodo: CreateTodoDto): Promise<TodoDocument> {
    const createdTodo = new this.todoModel(newTodo);
    return createdTodo.save();
  }

  findAll(): Promise<TodoDocument[]> {
    return this.todoModel.find({}).exec();
  }

  async update(id: string, updatedTodo: UpdateTodoDto): Promise<TodoDocument> {
    const todo = await this.todoModel.findById(id).exec();
    if (!todo) {
      throw new NotFoundException('Todo not found.');
    }
    Object.assign(todo, updatedTodo);
    return todo.save();
  }

  async remove(id: string): Promise<TodoDocument> {
    const todo = await this.todoModel.findById(id).exec();
    if (!todo) {
      throw new NotFoundException('Todo not found.');
    }
    if (!todo.isDeleted) {
      throw new BadRequestException("Todo isn't marked as deleted.");
    }
    return todo.deleteOne();
  }
}
