export class User{

  name:string;
  isAdmin:boolean;
  id:string;

  constructor(data?:IUser){
    this.name=data?data.name:"";
    this.id=data?data.id:"";
    this.isAdmin=data?data.isAdmin:false;
  }
}

export interface IUser{
  name:string;
  isAdmin:boolean;
  id:string;
}
