import React, { Component } from 'react'

export default class FullnameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullname: this.props.fullname,
        };
      }
  render() {
    const { fullname } = this.state;

    return (
      <div>
    <h5 style={{color:"red"}} > {fullname} </h5>

      </div>
    )
  }
}
