import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from './schemas/todo.schema';

// @ApiBearerAuth()
@ApiTags('Todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOperation({ summary: 'Create new todo' })
  @ApiResponse({ status: 201, type: Todo })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all todos' })
  @ApiResponse({ status: 200, type: Todo })
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get todo by id' })
  @ApiResponse({ status: 200, type: Todo })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update todo by id' })
  @ApiResponse({ status: 200, type: Todo })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete todo by id' })
  @ApiResponse({ status: 200, type: Todo })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  @ApiResponse({ status: 400, description: 'Todo not marked as deleted' })
  remove(@Param('id') id: string) {
    return this.todosService.remove(id);
  }
}
