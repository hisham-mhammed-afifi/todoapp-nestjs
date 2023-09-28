import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, TodosModule, ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
