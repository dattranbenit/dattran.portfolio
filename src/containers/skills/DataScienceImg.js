import React, { Component } from "react";

const mac = require("../../assests/images/animation_640_kzmkluxv.gif");

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{ marginTop: "-50px" }}>
        <img src={mac} alt="" width={"100%"} />
      </div>
    );
  }
}
