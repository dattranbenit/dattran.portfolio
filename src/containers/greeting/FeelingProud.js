import React, { Component } from "react";
import "../../components/header/Header.css";

const pic = require("../../assests/images/Screen Shot 2022-02-14 at 19.20.55.png");

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div
        style={{ display: "flex", justifyContent: "flex-end" }}
        className="img"
      >
        <img src={pic} alt="" width={"70%"} />
      </div>
    );
  }
}

export default FeelingProud;
