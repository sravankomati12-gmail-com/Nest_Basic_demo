import { Controller, Get } from '@nestjs/common';
import { Body, Post, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/a')
  getall(): number {
    return 455;
  }
  @Post('/add')
  @UseInterceptors(FileInterceptor("profile")) //single
  // @UseInterceptors(
  //   FileFieldsInterceptor([
  //     {
  //       name: 'image', // multiple
  //       maxCount: 2,
  //     },
  //     {
  //       name: 'image2',
  //       maxCount: 1,
  //     },
  //   ]),
  // )
  fileUpload(@UploadedFile() profile: Express.Multer.File,@Body() record) { //single file
  // fileUpload(
  //   @UploadedFile()
  //   img: {
  //     image1: Express.Multer.File[];
  //     image2: Express.Multer.File[];
  //   },
  // ) {
    console.log(profile);
    console.log(record.name);

    return 'done';
  }
}
