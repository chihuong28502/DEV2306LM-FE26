import React, { Component } from "react";

class CartTotal extends Component {
  render() {
    return (
      <tfoot id="my-cart-footer">
        {/* CART FOOTER */}
        <tr>
          <th colSpan={6}>Empty product in your cart</th>
        </tr>
        <tr>
          <td colSpan={4}>
            There are <b>5</b> items in your shopping cart.
          </td>
          <td colSpan={2} className="total-price text-left">
            12 USD
          </td>
        </tr>
      </tfoot>
    );
  }
}

export default CartTotal;
