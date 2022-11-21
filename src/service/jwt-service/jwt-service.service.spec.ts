import { Test, TestingModule } from '@nestjs/testing';
import { JwtServiceService } from './jwt-service.service';
import { RedisService } from '../redis/redis.service';
import { KeypairService } from '../keypair/keypair.service';

describe('JwtServiceService', () => {
  let service: JwtServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtServiceService, RedisService, KeypairService],
    }).compile();

    service = module.get<JwtServiceService>(JwtServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    let x = service.generateToken({ id: 'hero' });
    console.log(x);
  });

  it('should generate token', async () => {
    const x = await service.generateToken({ id: 'hero' });
    console.log(x);
  });
});
