import {Body, Controller, Get, Post, Res} from '@nestjs/common';

import { LoginService } from './login.service';
import { ResponseHandler } from '../../utils/handlers/response.handler';
import { Response } from 'express';
@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private responseHandler: ResponseHandler,
  ) {}

  @Post()
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res() response: Response,
  ): Promise<Response> {
    const data = await this.loginService.postAuthentication(
      username,
      password,
    );
    if (data.status) {
      return this.responseHandler.ResponseWithError(
        response,
        200,
        data.data,
        null,
        null,
      );
    } else {
      return this.responseHandler.ResponseWithError(
        response,
        null,
        null,
        data.data,
        401,
      );
    }
  }
}
