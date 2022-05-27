import React from "react";
import "../header/Header.css";
import { greeting } from "../../portfolio";

//images
const loader = require("../../assests/images/animation_640_kzm2m58j.gif");

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div
        className="header"
        style={{ display: "flex", flexDirection: "column", marginTop: "-17%" }}
      >
        <div>
          <img src={loader} alt="Loader" width={"100%"} />
        </div>
        <div style={{ marginTop: "-100px" }}>
          <span style={{ color: theme.text }}> &lt;</span>
          <span
            className="logo-name"
            style={{ color: theme.text, fontSize: 50, fontWeight: 700 }}
          >
            {greeting.logo_name}
          </span>
          <span style={{ color: theme.text }}>/&gt;</span>
        </div>
      </div>
    );
  }
}

export default LogoLoader;
