import { createStore } from 'redux'
const initialState ={
  userName:'Chí Hưởng',
  courseName:'ReactJs',
}
const reducer =(state = initialState,action) =>{
  switch(action.type){
    case 'CHANGE_USER_NAME':
      state.userName= action.userNameNew;
      break;
    case 'CHANGE_COURSE_NAME':
      state.courseName= action.courseNameNew;
      break;
    default:
      return state;
    }
    return state;
}
const store = createStore(reducer);

console.log(store)


console.log('Initial State')
console.log(store.getState());

// cập nhật laaji state
const actChangeUserName = ()=>{
  return {
    type:'CHANGE_USER_NAME',
    userNameNew:'Chí Hưởng updte',
  }
}

// chuyển action từ comp lên stỏre để update State
store.dispatch(actChangeUserName())
const actChangeCourseName = ()=>{
  return{
    type:"CHANGE_COURSE_NAME",
    courseNameNew:'ReactJsNew',
  }
}

// bắn action lên store để thực hiện updte state
store.dispatch(actChangeCourseName())
console.log("state sau thay đổi")
console.log(store.getState())

export default reducer;