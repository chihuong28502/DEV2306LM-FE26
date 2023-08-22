import React, { Component } from 'react';

class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      thanhPho: ''
    }
  }
  handleChange = (e) => {

    console.log(e.target.value)
    this.setState({
      thanhPho : e.target.value

    })
  }
  handleSubmit = (e) =>{

    e.preventDefault()
    console.log(this.state.thanhPho)
  }
  render() {
    return (
      <div>
        <h2>Xử lý dữ liệu vưới Select</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Name:</label>
          <select value={this.state.thanhPho}
            onChange={this.handleChange}
            >
            <option value="{'HN1'}">HN1</option>
            <option value="{'HN2'}">HN2</option>
            <option value="{'HN3'}">HN3</option>
            <option value="{'HN4'}">HN4</option>
          </select>
          <button >submit</button>
          </form>  
      </div>
    );
  }
}

export default FormSelect;