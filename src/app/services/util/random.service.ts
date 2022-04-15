import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  generateString(length?:number):string {
    length=length?length:10;
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ";
    for (let i=0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  generateNumber(length:number):string {
    length=length?length:10;
    let text = "";
    let possible = "0123456789";
    for (let i=0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  generateAlphaNumeric(length:number):string {
    length=length?length:10;
    let text = "";
    let possible = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSWXYZ";
    for (let i=0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
