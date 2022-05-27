import React, { Component } from "react";

const mail = require("../../assests/images/animation_640_kzmp15qz.gif");

export default class AddressImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={mail} alt="" width={"70%"} style={{ marginTop: "-50px" }} />
      </div>
    );
  }
}
