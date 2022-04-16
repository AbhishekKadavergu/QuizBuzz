import { IUser, User } from './User';
export interface IAuth{
  user:IUser,
  isLoggedIn:boolean,
  isAdmin:boolean,
  token:string
}

export class Auth{
  user:IUser;
  isLoggedIn:boolean;
  isAdmin:boolean;
  token:string;
  constructor(data?:IAuth){
    this.user=data?data.user:new User();
    this.isLoggedIn=data?data.isLoggedIn:false;
    this.isAdmin=data?data.isAdmin:false;
    this.token=data?data.token:""
  }
}
