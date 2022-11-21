import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from './login.service';
import {UserEntity} from "../../model/User/user.entity";
import {getRepository, Repository} from "typeorm";
import {getRepositoryToken} from "@nestjs/typeorm";

describe('LoginService', () => {
  let service: LoginService;
  let repository: Repository<UserEntity>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoginService,
        { provide: getRepositoryToken(UserEntity), useClass: Repository },
      ],
    }).compile();
    service = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
