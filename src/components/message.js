import React, { Component } from 'react'

export default class message extends Component {    
    constructor() {
        super();
        this.state = {
    message: "welcome. click the buttom for a secret message",
    };
}

    changeMessage() {
this.setState({
    message: "thanks for clicking me. keep pushing your're almost there"
    });
}


  render() {
    return (
      <div> 
        <h1> {this.state.message} </h1>
        <button onClick={() => this.changeMessage()}>CLICK HERE</button>
      </div>
    )
  }
}
