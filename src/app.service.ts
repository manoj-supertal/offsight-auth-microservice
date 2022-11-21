import { Injectable } from '@nestjs/common';
import { JwtServiceService } from "./service/jwt-service/jwt-service.service";

@Injectable()
export class AppService {
  constructor(private jwtService:JwtServiceService) {
  }
  getHello(): string {
    return 'Hello World!';
  }
  getIndex(): string {
    return '☢️Welcome to Auth microservice!! ☢';
  }
  async getTest():Promise<any> {
   const token= await this.jwtService.generateToken({foo:'bar'})
   return  {token:token}
  }

 async postTest(token){
    return this.jwtService.decodeToken(token)
  }
}
