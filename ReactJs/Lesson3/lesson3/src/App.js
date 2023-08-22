import React, { Component } from 'react';
import ButtonHandle from './component/ButtonHandle';
import FormInput from './component/FormInput';
import FormSelect from './component/FormSelect';
import FormFull from './component/FormFull';
import ListRender from './component/ListRender';
import ListStudents from './component/ListStudents';
import TestRef from './component/TestRef';
import RefUpFile from './component/RefUpFile';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      company: 'devmaster',
      students :[
        {name: 'Huong',age: 23},
        {name: 'Huong1',age: 231},
        {name: 'Huong2',age: 232},
        {name: 'Huong3',age: 233}
      ]
    }
  }
  // nhận dlieu từ comp Con ButtonHandle
  handleChangeData = (data) =>{
    this.setState({
      name1: data
    })
  }
  render() {
    return (
      <div className="container border my-5">
      <h1>Demo Even form {this.state.name1}</h1>
      {/* xử lý với sự kiện trên các nút */}
      <ButtonHandle onChangeData ={this.handleChangeData}/>

      <div className='alert alert-success'>
        <FormInput />
      </div>
      <FormSelect />
      <FormFull />
      <ListRender />
      <ListStudents 
        renderStudents = {this.state.students}
      />
      <TestRef />
      <RefUpFile />
    </div>
    );
  }
}

export default App;