import { Injectable } from '@nestjs/common';
import { generateKeyPair } from "crypto";
import { Buffer } from 'buffer';
import { RedisService } from "../redis/redis.service";
import * as sshpk from 'sshpk';

@Injectable()
export class KeypairService {

  constructor(private redisService:RedisService) {
  }

   generateRsaKey(id:number=1) {
    let  genPublicKey,genPrivateKey;
    generateKeyPair('rsa', {
      modulusLength: 4096,    // options
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
      }
    }, (err, publicKey, privateKey) => {
      if(!err)
      {
        genPublicKey = sshpk.parseKey(publicKey,'pem').toString('pem');
        genPrivateKey = sshpk.parsePrivateKey(privateKey, 'pem').toString()
        const base64PublicKey= this.convertKeyToString(genPublicKey)
        const base64PrivateKey = this.convertKeyToString(genPrivateKey)
        const keyPairBase64 = {base64PublicKey,base64PrivateKey}
        this.redisService.setValueToRedis(`keyPair-${id}`, JSON.stringify(keyPairBase64)).then(()=>{
          console.log('added to redis')
        })
      }
      else
      {
        console.log("Err is: ", err);
      }
      return
    });
    return {genPublicKey,genPrivateKey}
  }

  convertKeyToString(bufferKey:string){
    return  Buffer.from(bufferKey,'utf-8').toString('base64');
  }

  convertStringToKey(stringKey:string){
    return Buffer.from(stringKey,'base64').toString('utf-8')
  }

 setKeyPairToRedis(){
     this.generateRsaKey(1)
     this.generateRsaKey(2)
     this.generateRsaKey(3)
     this.generateRsaKey(4)
     this.generateRsaKey(5)

 }

 async getKeyPairFromRedis(id:number=1){
   const keyPairString = JSON.parse(await this.redisService.getValueToRedis(`keyPair-${id}`))
   let  privateKey = this.convertStringToKey(keyPairString['base64PrivateKey'])
   let publicKey =  this.convertStringToKey(keyPairString['base64PublicKey'])
   publicKey = sshpk.parseKey(publicKey,'pem').toBuffer('pkcs1')
   privateKey =  sshpk.parsePrivateKey(privateKey, 'pem').toBuffer('pkcs8')
   return {
     publicKey,
     privateKey
   }
 }

}
