import {redisKey} from "../keys/redis.key";



 export const redisConfig = {
    host: redisKey.host,
    port: (typeof redisKey.port != "number") ? parseInt(redisKey.port, 10) : redisKey.port,
    db: 1
  };


