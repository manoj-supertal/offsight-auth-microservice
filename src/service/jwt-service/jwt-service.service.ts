import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'
@Injectable()
export class JwtServiceService {

  generateToken(){
    // jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});
   return  jwt.sign({ foo: 'bar' }, 'asdasdas');
  }

  decodeToken(token:string){
    const decodedToken = jwt.verify(token, 'asdasdas')
    return decodedToken
  }

}
