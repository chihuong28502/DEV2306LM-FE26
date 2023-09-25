import React, { Component } from "react";

class CartTotal extends Component {
  render() {
    let { renderCarts } = this.props;
    let elementCartInfo = (
      <tr>
        <th colSpan={6}>Empty product in your cart</th>
      </tr>
    );
    if (renderCarts != null && renderCarts.length > 0) {
      // tổng giá
      let total = 0;
      for (let index = 0; index < renderCarts.length; index++) {
        total +=
          parseInt(renderCarts[index].product.price) *
          parseInt(renderCarts[index].quantity);
      }
      elementCartInfo = (
        <tr>
          <td colSpan={4}>
            There are <b>{renderCarts.length}</b> items in your shopping cart.
          </td>
          <td colSpan={2} className="total-price text-left">
            {total}
          </td>
        </tr>
      );
    }
    return <tfoot id="my-cart-footer">{elementCartInfo}</tfoot>;
  }
}

export default CartTotal;
