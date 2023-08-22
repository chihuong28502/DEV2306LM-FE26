import React, { Component } from 'react';

class ListRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1,2,3,4,5,6,7,8]
    }
  }
  render() {
    return (
      <div>
        <h2>List Map</h2>
        {this.state.arr.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </div>
    );
  }
}

export default ListRender;