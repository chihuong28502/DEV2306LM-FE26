import React, { Component } from "react";

class TotalPrice extends Component {
  render() {
    let {renderTotalQuantity,renderTotalPrice,renderSubTotal} = this.props;

    console.log(renderSubTotal)
    return (
      <>
        <tr className="border-1">
          <td />
          <td />
          <th>Total</th>  
          <td>{renderTotalQuantity}</td>
          <td>${renderTotalPrice}</td>
          <td>$ {renderSubTotal}</td>
          <td></td>
        </tr>
      </>
    );
  }
}

export default TotalPrice;
