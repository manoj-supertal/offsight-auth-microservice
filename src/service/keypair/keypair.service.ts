import { Injectable } from '@nestjs/common';
import { generateKeyPair } from "crypto";
import { Buffer } from 'buffer';
@Injectable()
export class KeypairService {


  generateRsaKey() {
    let  genPublicKey,genPrivateKey;
     generateKeyPair('rsa', {
      modulusLength: 530,    // options
      publicExponent: 0x10101,
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'der'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'der',
        cipher: 'aes-192-cbc',
      }
    }, (err, publicKey, privateKey) => { // Callback function
      if(!err)
      {
        // Prints new asymmetric key pair
        genPublicKey = publicKey
        genPrivateKey =privateKey
        console.log("Public Key is : ", publicKey);
        console.log();
        console.log("Private Key is: ", privateKey)

      }
      else
      {
        // Prints error
        console.log("Errr is: ", err);

      }

    });

     return {
     genPublicKey,
       genPrivateKey
     }
  }

  convertKeyToString(bufferKey:Buffer){
    return  bufferKey.toString('base64')
  }

  convertStringToKey(stringKey:string){
    return Buffer.from(stringKey, 'base64')
  }



}
