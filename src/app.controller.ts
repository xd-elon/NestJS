import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  index(): string {
    return "asbdasdbajsd"
  }

  @Post('/hello')
  send(): string {
    return "test"
  }
}
