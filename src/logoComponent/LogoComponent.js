import React, { Component } from 'react'

export default class LogoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          logo: this.props.logo,
        };
      }
  render()  {
    const {logo}=this.state;
    return (
      <div> <img style={{width:'120px',heigth:'110px',borderRaduis:'20px'}} src={logo} alt="" />
  
      </div>
    )
  }
}
