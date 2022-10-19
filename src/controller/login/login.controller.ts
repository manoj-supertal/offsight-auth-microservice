import { Controller, Get } from "@nestjs/common";

import { LoginService } from "./login.service";
import { UserEntity } from "../../model/User/user.entity";

@Controller('login')
export class LoginController {

  constructor(private readonly loginService: LoginService) {}

  @Get()
  async login():Promise<UserEntity[]> {

  const data =  await this.loginService.postAuthentication('manager@demo2.offsight.com','Welcome1');
    return data
  }
}
