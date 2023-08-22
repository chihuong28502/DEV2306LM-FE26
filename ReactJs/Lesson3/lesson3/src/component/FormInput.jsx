import React, { Component } from 'react';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      studentName: ''
    }
  }
  handleChange = (e) =>{
    this.setState({
      studentName: e.target.value
    })
  }
  handleSubmit = (e) =>{
    console.log(this.state.studentName)
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <h2>Xử lý dữ liệu vưới input</h2>
        <form>
          <label htmlFor="">Name:</label>
          <input type="text" 
          value={this.state.studentName} 
            onChange={this.handleChange}
            />
            
          <button type="submit" onClick={this.handleSubmit}>submit</button>
          </form>  
          
      </div>
    );
  }
}

export default FormInput;