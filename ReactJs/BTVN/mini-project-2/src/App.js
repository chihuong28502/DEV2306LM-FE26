import React, { Component } from "react";
import Control from "./components/Control";
import ListProducts from "./components/ListProducts";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          productId: "P001",
          productName: "IPhone 11",
          quantity: 11,
          price: 1100,
        },
        {
          productId: "P002",
          productName: "IPhone 12",
          quantity: 12,
          price: 1200,
        },
        {
          productId: "P003",
          productName: "IPhone 13",
          quantity: 13,
          price: 1300,
        },
        {
          productId: "P004",
          productName: "IPhone 14",
          quantity: 14,
          price: 1400,
        },
      ],
      isToggle: false,
      actionName: "",
      product: {},
    };
  }
  // hành động thêm sản phẩm
  handleAddProduct = (toggle, actionName) => {
    this.setState({ isToggle: toggle, actionName: actionName });
  };
  // nhận dataa hiển thị ra form từ product -> listProduct -> App
  handleViewEdit = (toggle, product, actionName) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
      product: product,
    });
  };

  // nhận product được thêm từ data Form
  handleSubmitForm = (toggle, product) => {
    let { products } = this.state;
    this.setState({ isToggle: toggle });
    // sửa
    if (this.state.actionName === "Cập nhật") {
      for (let i = 0; i < products.length; i++) {
        if (products[i].productId === product.productId) {
          products[i] = product;
          this.setState({ isToggle: false });
          break;
        }else{
          // alert("ko sửa id")

          console.log(product)
        }
      }
    } else if (this.state.actionName === "Thêm mới") {
      let { products } = this.state;
      products.push(product);
      this.setState({ products: products });
    }
  };
  handleDelete = (product) => {
    let { products } = this.state;
    products = products.filter((item) => item.productId !== product.productId);
    this.setState({ products: products });
  };
  render() {
    let { products, isToggle, product, actionName } = this.state;
    // xử lí + - * /
    let totalPrice = 0;
    let totalQuantity = 0;
    let subTotal = 0;
    for (let i = 0; i < products.length; i++) {
      totalQuantity += parseInt(products[i].quantity);
      totalPrice += parseInt(products[i].price);
      subTotal += (parseInt(products[i].quantity) * parseInt(products[i].price));
    }

    //
    let elementForm =
      isToggle === true ? (
        <Form
          onSubmitForm={this.handleSubmitForm}
          renderProduct={product}
          renderActionName={actionName}
        />
      ) : (
        ""
      );
    return (
      <div className="border-3 border mx-4 my-3 py-4 row d-flex justify-content-around">
        <Control onAddProduct={this.handleAddProduct} />
        <ListProducts
          renderSubTotal={subTotal}
          renderTotalQuantity={totalQuantity}
          renderTotalPrice={totalPrice}
          onDelete={this.handleDelete}
          onViewEdit={this.handleViewEdit}
          renderProducts={products}
        />
        {elementForm}
      </div>
    );
  }
}

export default App;
