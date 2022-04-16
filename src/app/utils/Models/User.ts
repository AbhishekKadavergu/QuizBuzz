export class User{

  name:string;
  mail:string;
  isAdmin:boolean;
  id:string;
  isLoggedIn:boolean;

  constructor(data?:IUser){
    this.name=data?data.name:"";
    this.id=data?data.id:"";
    this.isAdmin=data?data.isAdmin:false;
    this.mail=data?data.mail:"";
    this.isLoggedIn=data?data.isLoggedIn:false;
  }
}

export interface IUser{
  name:string;
  isAdmin:boolean;
  id:string;
  mail:string;
  isLoggedIn:boolean;
}
