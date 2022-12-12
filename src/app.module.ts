import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot(),MongooseModule.forRoot(process.env.dbConnection), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
