import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { TodoStatus } from '../schemas/TodoStatus';

export class CreateTodoDto {
  @ApiProperty({ example: 'new todo' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'this the details for your new todo' })
  @IsString()
  details: string;

  @ApiProperty({ example: TodoStatus.New })
  @IsInt()
  status: TodoStatus;

  @ApiProperty({ example: '638c2fb47dd7b570ff38e31e' })
  @IsString()
  parentId: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  isDeleted: boolean;
}
