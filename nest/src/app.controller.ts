import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("status")
  @Header('content-type', 'application/json')
  @Header('cache-control', 'no-cache')
  async _(): Promise<string> {
    return await this.appService.getAlgodStatus();
  }
}
