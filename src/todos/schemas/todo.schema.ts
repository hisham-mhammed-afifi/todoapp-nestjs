import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { TodoStatus } from './TodoStatus';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop({ required: true })
  @ApiProperty({ example: 'new todo' })
  title: string;

  @Prop({ required: true })
  @ApiProperty({ example: 'this the details for your new todo' })
  details: string;

  @Prop({ required: true })
  @ApiProperty({ example: TodoStatus.New })
  status: TodoStatus;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' })
  @ApiProperty({ example: '638c2fb47dd7b570ff38e31e' })
  parentId: string;

  @Prop({ required: true })
  @ApiProperty({ example: false })
  isDeleted: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
