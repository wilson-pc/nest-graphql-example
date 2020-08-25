import { Controller, Get, Render, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Post()
 
  load(@Body() dd:any) {
    console.log(dd);
    return { message: 'Hello world!' };
  }
}
