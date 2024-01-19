import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('posts')
  write(@Body() body: { title: string; content: string }) {
    console.log(`클라이언트에서 온 데이터 ${body.title}, ${body.content}`);
  }
}
