import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { KeypairService } from "./service/keypair/keypair.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly keyPairService:KeypairService) {}

  @Get()
  getHello(): string {
    return this.appService.getIndex();
  }

  @Get('/test')
  async getTest(): Promise<string> {
    return await this.appService.getTest();
  }

  @Post('/test')
  async postTest(@Body('token') token:string): Promise<string> {
    return this.appService.postTest(token);
  }

  @Get('gen')
  getGenKeyPair(){
    this.keyPairService.setKeyPairToRedis()
    return {
      message:'success'
    }
  }
}
