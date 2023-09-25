// import { UPDATE_ITEM, DELETE_ITEM, BUY_ITEM } from "../constants/actionTypes";
// sử dụng các chức năng trong giỏ hàng : buy,update,delete
import { BUY_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../constants/actionTypes";
import { LOCAL_STORAGE_NAME } from "../constants/localStorageName";

// hàm ktra xem sp có trong giỏ hàng ko
const getIndexByProduct = (list, product) => {
  for (let index = 0; index < list.length; index++) {
    if (list[index].product.productId === product.productId) {
      // sản phẩm đã tồn tại trong giỏ hàng
      return index;
    }
  }
  // sản phẩm chưa có trong giỏ hàng
  return -1;
};
//khởi tạo dữ liệu (old state)
let initState = [];
// ktra xem mua lần đầu hay mua thêm
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
initState =
  shoppingCartLocal !== null && shoppingCartLocal.length >= 0
    ? shoppingCartLocal
    : [];

//tạo reducer
const cart = (state = initState, action) => {
  // lấy sản phẩm vào số lượng từ action
  let { product, quantity } = action;
  let item = { product, quantity };
  // biến quản lí chức năng mua (mới),(mua thêm)
  let index = -1; // giả định sản phẩm là mua mới
  // tùy theo chức năng (type) để xác định mua hàng ,update,delete
  switch (action.type) {
    case BUY_ITEM: // mua
      if (state.length === 0) {
        // khách hàng chưa mua hàng,giỏ hàng của khách chưa có sp nào
        // thêm sảm phẩm vào giỏ hàng
        state.push(item);
      } else {
        // giỏ hầng của khách đã tồn tại
        // th1/th2
        // dựa vào index để xác định => viết hàng ktra xem sản phẩm đẫ có trong giỏ hàng chưa
        index = getIndexByProduct(state, product);
        if (index >= 0) {
          // sản phẩm mua đã có trong giỏ hàng ,
          // thực hiện cập nhật số lượng
          state[index].quantity =
            parseInt(state[index].quantity) + parseInt(quantity);
        } else {
          // nếu sản phẩm mua là mới , chưa có trong giỏ hàng
          state.push(item);
        }
      }
      // cập nhật localStorage
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
      return [...state];
    case UPDATE_ITEM: // cạp nhật
      // tìm sp cần sửa
      index = getIndexByProduct(state, product);
      if (index >= 0) {
        state[index].quantity = quantity;
      }
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state, quantity));

      return [...state];
    case DELETE_ITEM: // xóa sp
      // tìm sp cần xóa
      index = getIndexByProduct(state, product);
      if (index >= 0) {
        state.splice(index, 1);
      }
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};
export default cart;
