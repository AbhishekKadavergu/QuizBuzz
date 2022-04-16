export interface IDropdown{
  label:string;
  value:any;
}

export class Dropdown{
  label:string;
  value:any;
  constructor(data?:IDropdown){
    this.label=data?data.label:"";
    this.value=data?data.value:"";
  }
}
