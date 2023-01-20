import React, { Component } from "react";

export default class DescriptionDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.description,
    };
  }

  render() {
    const { data } = this.state;
    return <div>
<p>  {data} </p>
      </div>;
  }
}
