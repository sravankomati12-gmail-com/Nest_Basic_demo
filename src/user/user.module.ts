import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserSchema } from './user.model';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userMiddleware } from './user.middleware';


@Module({
  imports:[ MongooseModule.forFeature([{ name: "userinfo", schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService]
})

export class UserModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(userMiddleware).forRoutes("user")

  }
  
}
