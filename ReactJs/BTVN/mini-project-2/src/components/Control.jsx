import React, { Component } from 'react';

class Control extends Component {
  handleAddProduct = ()=>{
    this.props.onAddProduct(true,'Thêm mới')
  }
  render() {
    return (
      <div className="col-12">
        <button 
          onClick={this.handleAddProduct}
        
        className=" btn btn-info w-25 mb-3" type="button">
          Them san pham
        </button>
      </div>
    );
  }
}

export default Control;