// sử dụng các hằng
import * as types from "../constants/actionTypes";

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
