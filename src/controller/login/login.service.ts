import { Injectable } from '@nestjs/common';
import { MD5, enc } from 'crypto-js';

import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../model/User/user.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UserEntity) private user: Repository<UserEntity>,
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

  async postAuthentication(username, password): Promise<UserEntity[]> {
    const data = await this.user.find({
      where: { username, password: this.encrypt(password), isActive: true },
    });
    return data;
  }
}
