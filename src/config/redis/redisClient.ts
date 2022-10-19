import { createClient } from 'redis';
import {redisConfig} from "./redisConfig";

const client = createClient({
  url: `redis://${redisConfig.host}:${redisConfig.port}/${redisConfig.db}`
});

client.on('error', (err) => console.log('Redis Client Error', err));


client.connect()
  .then(() => {
    console.log(`Redis has been initialized`);
  })
  .catch((err) => {
    console.error(`Redis initialization error`, err);
  });


export default client;