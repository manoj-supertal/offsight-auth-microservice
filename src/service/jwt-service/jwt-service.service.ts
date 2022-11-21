import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { KeypairService } from '../keypair/keypair.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const random = require('random');

@Injectable()
export class JwtServiceService {
  constructor(private readonly keypairService: KeypairService) {}

  async generateToken(payLoad: any): Promise<string> {
    const keyId = random.int(1, 5);
    const { privateKey } = await this.keypairService.getKeyPairFromRedis(keyId);
    return jwt.sign(payLoad, privateKey, {
      algorithm: 'RS256',
      header: { type: undefined, key: keyId },
    });
  }

  async decodeToken(token: string) {
    try {
      const tokenHeader = this.getTokenHeader(token);
      if (!tokenHeader) {
        throw new Error('Invalid Token');
      }
      const keyId = tokenHeader.key;
      const { publicKey } = await this.keypairService.getKeyPairFromRedis(
        keyId,
      );
      return jwt.verify(token, publicKey);
    } catch (e) {
      console.log(`[decodeToken] ${e}`);
      return null;
    }
  }

  getTokenHeader(token: string) {
    try {
      const header = jwt.decode(token, { complete: true }).header;
      if (!header) {
        throw new Error('Invalid header');
      }
      if (header['alg'] != 'RS256') {
        throw new Error('Invalid header algorithm missing');
      }
      return header;
    } catch (e) {
      console.log(`[getTokenHeader] Invalid header detected`);
      return null;
    }
  }
}
