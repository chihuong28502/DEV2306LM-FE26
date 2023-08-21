// @flow
import React, { Component } from "react";

class AppEdit extends Component {
  constructor(props) {
    super(props);
    this.state ={
      lists:[],
      name:'',
    };
  }
  handleAdd = () => {
    this.setState({name:''})
    this.setState({
      lists:[...this.state.lists,this.state.name],
    })
  };
  handleChange = (event) => {
    let value = event.target.value;
    this.setState({
      name:value
    })
  };
  render() {
    return (
      <div style={{ width: 200, height: "400px", margin: "100px" }}>
        <input
        value={this.state.name}
        onChange={this.handleChange} type="text" />
        <button onClick={this.handleAdd}>add</button>
        <ul>
          {this.state.lists.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AppEdit;
