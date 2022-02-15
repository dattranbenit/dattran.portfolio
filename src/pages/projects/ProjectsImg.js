import React, { Component } from "react";

const project = require("../../assests/images/animation_640_kzmopoeu.gif")

export default class ProjectsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <img src={project} alt="" style={{marginTop: "-30px"}} width={600}/>
      </>
    );
  }
}
