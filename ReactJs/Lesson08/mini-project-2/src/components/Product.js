import React, { Component } from "react";

class Product extends Component {
  render() {
    let { product } = this.props;
    let element = <span className="price">{product.price} USD</span>;
    if ((product.quantity !== 0)) {
      element = (
        <>
          <input
            name="quantity-product-1"
            type="number"
            defaultValue={product.quantity}
            min={1}
          />
          <button data-product={1} className="btn btn-success">
            Mua hàng
          </button>
          <a data-product={1} className="price">
            {" "}
            {product.price}${" "}
          </a>
        </>
      );
    }
    return (
      <div className="media product">
        <div className="media-left">
          <a>
            <img
              className="media-object"
              src={`images/${product.image}`}
              alt="charmander"
            />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{product.productName}</h4>
          <p>{product.descriptions}</p>
          {element}
        </div>
      </div>
    );
  }
}

export default Product;
