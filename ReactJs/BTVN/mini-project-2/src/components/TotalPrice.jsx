import React, { Component } from "react";

class TotalPrice extends Component {
  render() {
    let {renderTotalQuantity,renderTotalPrice,renderTotalSub} = this.props;

    return (
      <>
        <tr className="border-1">
          <td />
          <td />
          <th>Total</th>  
          <td>{renderTotalQuantity}</td>
          <td>${renderTotalPrice}</td>
          <td>$ 1500000</td>
          <td></td>
        </tr>
      </>
    );
  }
}

export default TotalPrice;
