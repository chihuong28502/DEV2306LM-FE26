import { CHANGE_NOTIFY } from "../constants/actionTypes";
import * as mess from "../constants/messages";
//khởi tạo dữ liệu (old state)
const initState = mess.MSG_LOAD_SUCCESS;

//tạo reducer
const notify = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_NOTIFY:
      state = action.payload
      return state;
    default:
      return state;
  }
};
export default notify;
