import React, { Component } from "react";

const education = require("../../assests/images/animation_640_kzmr5vr6.gif")

export default class EducationImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img src={education} alt="" width={600} style={{marginTop: "-30px"}}/>
      </div>
    );
  }
}
