import {UserAnswerData} from "./userAnswerData.interface";

export interface User{
  name:string;
  nickName:string;
  mail:string;
  number:string;
  id?:number;
  userAnswerData?:UserAnswerData;
}
