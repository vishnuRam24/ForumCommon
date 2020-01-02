import { Injectable } from '@angular/core';
import * as  CryptoJS from 'crypto-js';
import { datasType } from '../Model/dbModel';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  secretKey = 'it is a secret key';
  encryptedText: CryptoJS.WordArray;



  constructor() { }

  encrypt(value: any) {
    console.log('in the encrypt method');
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
    // return CryptoJS.AES.encrypt(JSON.stringify(value), this.secretKey.trim()).toString();
  }

  // encryptSpecial(value: string) {
  //   this.encryptedText = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), CryptoJS.enc.Utf8.parse(this.secretKey), {

  //     keySize: 32,
  //     mode: CryptoJS.mode.CBC,
  //     padding: CryptoJS.pad.Pkcs7
  //   });

  //   return this.encryptedText.toString(CryptoJS.enc.Utf8);
  // }






  decrypt(encrypetedText: string) {
    return CryptoJS.AES.decrypt(encrypetedText, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
}
