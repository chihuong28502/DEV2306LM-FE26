import React, { Component } from 'react'
import Avatar from './Avatar';
export default class MemberInfo extends Component {
  render() {
    return (
      <div>
        <h2>MemberInfo</h2>
        <Avatar link={this.props.info.path}/>
        <div>
          <p>tên: {this.props.info.name}</p>
          <p>tên: {this.props.info.age}</p>
        </div>
      </div>
    )
  }
}
