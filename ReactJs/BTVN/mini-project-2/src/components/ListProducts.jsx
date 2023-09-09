import React, { Component } from "react";
import Product from "./Product";
import TotalPrice from "./TotalPrice";

class ListProducts extends Component {
  handleViewEdit = (togge,product,actionName)=>{
    this.props.onViewEdit(togge,product,actionName);
  }
  // delete product
  handleDelete = (product)=>{
    this.props.onDelete(product);
  }
  render() {
    let { renderProducts } = this.props;
    let elementProduct = renderProducts.map((item, index) => {
      return <Product 
      onDelete={this.handleDelete}
      onViewEdit = {this.handleViewEdit}
      
      key={index} stt={index + 1} 
      renderProduct = {item}
      />;
    });
    return (
      <div className="col-7 justify-content-end d-flex">
        <table border={1} className="table table-bordered ">
          <thead className="text-center bg-danger">
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {elementProduct}
            <TotalPrice />
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListProducts;
