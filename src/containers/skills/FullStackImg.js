import React, { Component } from "react";

const manage = require("../../assests/images/animation_640_kzmklnsi.gif")

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{marginTop: "-150px"}}>
        <img src={manage} alt="" />
      </div>
    );
  }
}
