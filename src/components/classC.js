// type rcc 

import React, { Component } from 'react'

export default class classC extends Component {
    constructor() {
    super();
    this.state = {color: 'red'};
    }

  render() {
    return (
      <div>
        <h2>I am a {this.state.color} car!</h2>
      </div>
    )
  }
}

