import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { TodoPriority, TodoStatus } from '../schemas/TodoEnums';

export class CreateTodoDto {
  @ApiProperty({ example: '638c2fb47dd7b570ff38e31e' })
  @IsString()
  userId: string;

  @ApiProperty({ example: 'new todo' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'this the details for your new todo' })
  @IsString()
  details: string;

  @ApiProperty({ example: TodoStatus.New })
  @IsEnum(TodoStatus)
  @IsOptional()
  status: TodoStatus;

  @ApiProperty({ example: TodoPriority.Low })
  @IsEnum(TodoPriority)
  priority: TodoPriority;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  isDeleted: boolean;
}
