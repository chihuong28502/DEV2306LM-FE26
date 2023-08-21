import React, { Component } from 'react'
import Member from './Member'

export default class MemberList extends Component {
  render() {
    return (
      <div>
        <h2>MemberList</h2>
        <Member 
          name = 'Member1'
          age = '20'
        />
        <Member 
          name = 'Member1'
          age = '20'
        />
        <Member 
          name = 'Member1'
          age = '20'
        />
      </div>
    )
  }
}
