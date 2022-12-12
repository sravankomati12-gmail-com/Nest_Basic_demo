import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.dbConnection),
    UserModule,
    // MulterModule.register({
      // dest: './images',  //multer config
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
