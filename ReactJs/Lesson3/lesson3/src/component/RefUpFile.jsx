import React, { Component } from 'react';

class RefUpFile extends Component {
  constructor(props) {
    super(props);
    this.fileUpLoad = React.createRef()
  }
  submitFile = ()=>{

    console.log(this.fileUpLoad.current.files[0].name);
  }
  render() {
    return (
      <div>
        <input type="file"  ref={this.fileUpLoad}/>
        <button onClick={this.submitFile}>send file</button>
      </div>
    );
  }
}

export default RefUpFile;