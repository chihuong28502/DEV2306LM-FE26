import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      productName: "",
      quantity: 0,
      price: 0,
      subTotal: 0,
    };
  }
  handleViewEdit = (product,actionName)=>{
    this.props.onViewEdit(true,product,actionName);
  }

  // delete product
  handleDelete = ()=>{
    let { renderProduct } = this.props;
    this.props.onDelete(renderProduct)
  }
  render() {
    let { renderProduct, stt } = this.props;
    let subTotal = parseFloat(renderProduct.price) * parseInt(renderProduct.quantity);

    return (
      <>
        <tr className="border-1">
          <td>{stt}</td>
          <td>{renderProduct.productId}</td>
          <td>{renderProduct.productName}</td>
          <td>{renderProduct.quantity}</td>
          <td>${renderProduct.price}</td>
          <td>${subTotal}</td>
          <td>
            <button
              onClick={() => this.handleViewEdit(renderProduct, "Đóng")}
              type="button"
              className="btn btn-warning btn-icon-text"
            >
              Xem
            </button>
            <button
              onClick={() => this.handleViewEdit(renderProduct, "Cập nhật")}
              type="button"
              className="btn btn-dark btn-icon-text"
            >
              Sửa
            </button>
            <button 
            onClick={this.handleDelete}
            type="button" className="btn btn-danger btn-icon-text">
              Xóa
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default Product;
