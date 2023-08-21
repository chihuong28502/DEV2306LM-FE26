
import JSXExpression from './components/JSXExpression';
import FuncCompDemo from './components/FuncCompDemo';
import ClassCompDemo from './components/ClassCompDemo';
import Header from './components/Header';
import MemberList from './components/MemberList';
import MemberInfo from './components/MemberInfo';
import CompState from './components/CompState';
import { Component } from 'react';


export default class App extends Component {
  render() {
    const member ={
      path:'https://i.stack.imgur.com/2l4Ai.jpg?s=64&g=1',
      name: ' A',
      age: 36
    }
    return (
      <div>
        <MemberInfo info={member} />
        <CompState />
      </div>
    )
  }
}

