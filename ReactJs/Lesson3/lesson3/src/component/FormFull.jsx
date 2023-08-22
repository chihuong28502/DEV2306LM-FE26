import React, { Component } from 'react';

class FormFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thanhPho:'',
      studentName : ''
    }
  }
  handleChange = (e)=>{
    let name = e.target.name
    let value = e.target.value
    this.setState(
      {
        [name]: value
      }
      )
  }
  handleSubmit = (e) =>{

    e.preventDefault()
    
    console.log(this.state)
  }
  render() {
    return (
      <div className='alert alert-success'>
        <form>
          <label htmlFor="">Name:</label>
          <input type="text" name='studentName'
          value={this.state.studentName} 
            onChange={this.handleChange}
            />
            <label htmlFor="">Name:</label>
          <select value={this.state.thanhPho}
            onChange={this.handleChange}
            name='thanhPho'
            >
            <option value="{'HN1'}">HN1</option>
            <option value="{'HN2'}">HN2</option>
            <option value="{'HN3'}">HN3</option>
            <option value="{'HN4'}">HN4</option>
          </select>
          <button type="submit" onClick={this.handleSubmit}>submit</button>
          </form> 
      </div>
    );
  }
}

export default FormFull;