import React, { Component } from "react";

const experience = require("../../assests/images/animation_640_kzmol4oq.gif")

export default class ExperienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <img src={experience} alt="" style={{marginTop: "-30px"}} width={600}/>
      </>
    );
  }
}
