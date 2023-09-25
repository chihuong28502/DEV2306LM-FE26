// sử dụng các hằng
import * as types from "../constants/actionTypes";
import * as mess from "../constants/messages";

// action cho chức năng hiển thị sản phẩm
export const act_list_product = () => {
  return {
    type: types.LIST_PRODUCT,
  };
};
// action - mua hàng
export const act_buy_item = (product, quantity) => {
  return {
    type: types.BUY_ITEM,
    product,
    quantity,
  };
};
// xóa sp trong giỏ hàng
export const act_delete_item = (product) => {
  return {
    type: types.DELETE_ITEM,
    product,
  };
};
// update cart
export const act_update_item = (product, quantity) => {
  return {
    type: types.UPDATE_ITEM,
    product,
    quantity,
  };
};
// action thông báo
export const act_change_notify = (content) => {
  return {
    type: types.CHANGE_NOTIFY,
    payload: content,
  };
};
