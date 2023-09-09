import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      productName: "",
      quantity: 0,
      price: 0,
    };
  }
  handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value });
  };
  handleSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(true,this.state);
  };
  componentWillMount = () => {
    let { renderActionName, renderProduct } = this.props;
    if (renderActionName === "Cập nhật" || renderActionName === "Đóng") {
      this.setState({
        productId: renderProduct.productId,
        productName: renderProduct.productName,
        quantity: renderProduct.quantity,
        price: renderProduct.price,
      });
    } else {
      this.setState({
        productId: "",
        productName: "",
        quantity: 0,
        price: 0,
      });
    }
  };
  componentWillReceiveProps = (nextProps) => {
    let { renderActionName, renderProduct } = nextProps;
    if (renderActionName === "Cập nhật" || renderActionName === "Đóng") {
      this.setState({
        productId: renderProduct.productId,
        productName: renderProduct.productName,
        quantity: renderProduct.quantity,
        price: renderProduct.price,
      });
    }
  };
  render() {
    let { renderActionName,update } = this.props;
    return (
      <div className="col-5 border-1 border border px-0">
        <h3 className="bg-danger m-0 py-2 px-3">Thông tin sản phẩm</h3>
        <form className="mt-2 px-3 form-sample" action="">
          <div className="d-flex mb-3">
            <label className="label" htmlFor="">
              ID
            </label>
            <input
              value={this.state.productId}
              update ={update}
              onChange={this.handleChange}
              className="w-100"
              type="text"
              name="productId"
              placeholder="Product ID"
              id=""
            />
          </div>
          <div className="d-flex mb-3">
            <label className="label" htmlFor="">
              Name
            </label>
            <input
              value={this.state.productName}
              onChange={this.handleChange}
              className="w-100"
              type="text"
              name="productName"
              placeholder="Product ID"
              id=""
            />
          </div>
          <div className="d-flex mb-3">
            <label className="label" htmlFor="">
              Quantity
            </label>
            <input
              value={this.state.quantity}
              onChange={this.handleChange}
              className="w-100"
              type="number"
              name="quantity"
              placeholder="Product ID"
              id=""
            />
          </div>
          <div className="d-flex mb-3  ">
            <label className="label" htmlFor="">
              Price
            </label>
            <input
              value={this.state.price}
              onChange={this.handleChange}
              className="w-100"
              type="number"
              name="price"
              placeholder="Product ID"
              id=""
            />
          </div>
          <button
            onClick={this.handleSubmitForm}
            className="btn btn-info w-25 mb-3"
            type="button"
          >
            {renderActionName}
          </button>
          <h4 className="mb-2 alert alert-info m-0 py-2 px-3">
            Hệ thống đã sẵn sàng ...
          </h4>
        </form>
      </div>
    );
  }
}

export default Form;
