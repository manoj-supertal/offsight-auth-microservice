import { Test, TestingModule } from '@nestjs/testing';
import { RedisService } from './redis.service';

describe('RedisService', () => {
  let redisService: RedisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisService],
    }).compile();

    redisService = module.get<RedisService>(RedisService);
  });

  it('should be defined', () => {
    expect(redisService).toBeDefined();
  });
  it('should be equal', async () => {
    const keyId = 'test-key';
    const value = 'test-value';
    await redisService.setValueToRedis(keyId, value);
    const redisValue = await redisService.getValueToRedis(keyId);
    expect(value == redisValue).toBeTruthy();
  });

});
