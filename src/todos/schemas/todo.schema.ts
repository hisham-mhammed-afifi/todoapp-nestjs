import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { TodoPriority, TodoStatus } from './TodoEnums';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  @ApiProperty({ example: '638c2fb47dd7b570ff38e31e' })
  userId: string;

  @Prop({ required: true })
  @ApiProperty({ example: 'new todo' })
  title: string;

  @Prop()
  @ApiProperty({ example: 'this the details for your new todo' })
  details: string;

  @Prop({ required: true, default: TodoStatus.New })
  @ApiProperty({ example: TodoStatus.New })
  status: TodoStatus;

  @Prop({ required: true })
  @ApiProperty({ example: TodoPriority.Low })
  priority: TodoPriority;

  @Prop({ required: true, default: false })
  @ApiProperty({ example: false })
  isDeleted: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
