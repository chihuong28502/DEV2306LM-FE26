import * as types from "../constants"
export const atcChangeUserName = (value)=>{
  return{
    type:types.CHANGE_USERNAME,
    data:value
  }
};
export const atcChangeCourseName = (value)=>{
  return{
    type:types.CHANGE_COURSENAME,
    data:value
  }
};