import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {JwtServiceService} from "./service/jwt-service/jwt-service.service";
import {KeypairService} from "./service/keypair/keypair.service";
import {RedisService} from "./service/redis/redis.service";

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, JwtServiceService, KeypairService,RedisService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe(
        '☢️Welcome to Auth microservice!! ☢',
      );
    });
  });
});
