import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../../model/User/user.entity';
import { Repository } from 'typeorm';

describe('LoginController', () => {
  let controller: LoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [
        LoginService,
        { provide: getRepositoryToken(UserEntity), useClass: Repository },
      ],
    }).compile();

    controller = module.get<LoginController>(LoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
