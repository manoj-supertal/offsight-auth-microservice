import { Injectable } from '@nestjs/common';
import { MD5, enc } from 'crypto-js';

import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../model/User/user.entity';
import {JwtServiceService} from "../../service/jwt-service/jwt-service.service";

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UserEntity) private user: Repository<UserEntity>,
    private jwtService: JwtServiceService
  ) {}

  encrypt = (text) => {
    return MD5(text).toString(enc.Hex);
  };
  // async postAuthentication(username,password) {
  //   let sqlAuthUser = `SELECT
  //                            acu.client_user_id,
  //                            acu.client_user_first_name,
  //                            acu.client_user_last_name,
  //                            acm.client_name,
  //                            acu.client_id,
  //                            acu.client_user_profie_image,
  //                            acu.user_2fa_enable,
  //                            acu.client_user_username
  //                        FROM
  //                            actv_client_users acu
  //                        INNER JOIN actv_client_master acm ON
  //                            acm.client_id = acu.client_id
  //                        WHERE
  //                            acu.client_user_username = ?
  //                            AND acu.client_user_password = ?
  //                            AND acu.client_user_is_active = 1;`
  //
  //    const data = await entityManager.manager.query(sqlAuthUser, [username, this.encrypt(password)])
  //
  //     console.log(data)
  //  }

  isCaptchaVerify(): boolean {
    //TODO
    return true;
  }

  verifyLogin(username: string, password: string): Promise<UserEntity[]> {
    return this.user.find({
      where: { username, password: this.encrypt(password), isActive: true },
    });
  }

  async postAuthentication(username, password) {
    try{
      if(!this.isCaptchaVerify()){
        throw new Error('Captcha not verified');
      }
      const data = await this.verifyLogin(username, password);
      if(data.length<1){
        throw new Error('Invalid Login Credentials');
      }
      console.log(data)
      const token = await this.jwtService.generateToken({test:'abc'})
      return { status: true, data: token };
    } catch (e) {
      return { status: false, data: e };
    }
  }
}
