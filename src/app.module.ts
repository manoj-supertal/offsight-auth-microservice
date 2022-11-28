import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './controller/login/login.controller';
import { LoginService } from './controller/login/login.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import TypeOrmConfig from "./config/database/typeorm.config";
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from "./model/User/user.entity";
import { JwtServiceService } from './service/jwt-service/jwt-service.service';
import { KeypairService } from './service/keypair/keypair.service';
import { RedisService } from './service/redis/redis.service';
import {ResponseHandler} from "./utils/handlers/response.handler";

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    TypeOrmModule.forRoot(TypeOrmConfig.options),
    TypeOrmModule.forFeature([UserEntity]),

  ],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService, JwtServiceService, KeypairService, RedisService, ResponseHandler],
})
export class AppModule {}
