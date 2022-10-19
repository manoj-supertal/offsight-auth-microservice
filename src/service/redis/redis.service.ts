import { Injectable } from '@nestjs/common';
import redisClient from "../../config/redis/redisClient";
@Injectable()
export class RedisService {


  async setValueToRedis(key:string,value:string){
    await redisClient.set(key,value)
  }

  async getValueToRedis(key:string):Promise<string>{
    return await redisClient.get(key)
  }
}
