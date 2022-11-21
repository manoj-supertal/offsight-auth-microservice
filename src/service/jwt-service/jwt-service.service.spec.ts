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
  });

  it('should generate token', async () => {
    const token = await service.generateToken({ id: 'hero' });
    expect(token).toBeDefined();
  });

  it('should generate token and decode', async () => {
    const token = await service.generateToken({ id: 'hero' });
    const decode = await service.decodeToken(token);
    expect('hero' == decode['id']).toBeTruthy();
  });

  it('should throw error', async () => {
    const token = 'asdasdw.asdawdasdha-asdawd.awwww';
    const decode = await service.decodeToken(token);
    expect(decode).toBeNull();
  });

});
