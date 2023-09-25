import React, { Component } from "react";
import { MSG_DELETE_SUCCESS, MSG_UPDATE_SUCCESS } from "../constants/messages";
import { connect } from "react-redux";
import { act_change_notify, act_update_item } from "../actions";
import { act_delete_item } from "../actions";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
  // hàm xử lí sự kiện xóa sản phẩm trong giỏ hàng
  handleDelte = (product) => {
    if (window.confirm("Bạn có muốn xóa sản phẩm ra khỏi giỏ hàng không?")) {
      this.props.deleteItem(product);
      this.props.changeNotify(MSG_DELETE_SUCCESS);
    }
  };

  // updaate
  handleUpdate = (product, quantity) => {
    this.props.updateItem(product, this.state.quantity);
    this.props.changeNotify(MSG_UPDATE_SUCCESS);
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.carts !== prevProps.carts) {
      this.setState({
        quantity: this.props.renderCart.quantity,
      });
    }
  };
  render() {
    let { renderCart, rollNo } = this.props;

    console.log(renderCart.quantity);
    console.log(this.state.quantity);
    // xử lí hiển thị số lượng
    let quantity =
      this.state.quantity === 0 ? renderCart.quantity : this.state.quantity;
    return (
      <tr>
        <th scope="row">{rollNo}</th>
        <td>{renderCart.product.productName}</td>
        <td>{renderCart.product.price} USD</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            value={quantity}
            onChange={(ev) =>
              this.setState({ quantity: parseInt(ev.target.value) })
            }
            min={1}
          />
        </td>{" "}
        <td>
          <strong>
            {parseInt(renderCart.product.price) * parseInt(quantity)}USD
          </strong>
        </td>
        <td>
          <a
            href="/#"
            onClick={() => this.handleUpdate(renderCart.product)}
            className="label label-info update-cart-item"
          >
            Update
          </a>
          <a
            href="/#"
            onClick={() => this.handleDelte(renderCart.product)}
            className="label label-danger delete-cart-item"
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // bắn action mua hàng đến reducer
    deleteItem: (product) => {
      dispatch(act_delete_item(product));
    },
    updateItem: (product, quantity) => {
      dispatch(act_update_item(product, quantity));
    },
    changeNotify: (content) => {
      dispatch(act_change_notify(content));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    carts: state.cart,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
