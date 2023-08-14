import React, { Component } from 'react';

export default class ClassCompDemo extends Component {
  render() {
    return (
      <div>
        <h1>Class Component Demo</h1>
        <p>name: {this.props.userName}</p>
      </div>
    )
  }
}

