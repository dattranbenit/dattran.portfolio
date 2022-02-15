import React from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const codeacademy = require("../../assests/images/download.png")
const udacity = require("../../assests/images/ud.png")
const udemy = require("../../assests/images/download (1).png")

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.siteName}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.siteName}</strong>
                  </Tooltip>
                }
              >
                <li className="competitive-sites-inline" name={logo.siteName}>
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/*<span*/}
                    {/*  className="iconify"*/}
                    {/*  data-icon={logo.iconifyClassname}*/}
                    {/*  style={logo.style}*/}
                    {/*  data-inline="false"*/}
                    {/*></span>*/}
                    {logo.iconifyClassname === "codeacademy" && <img src={codeacademy} alt="codeacademy" width={60}/>}
                    {logo.iconifyClassname === "udacity" && <img src={udacity} alt="udacity" width={60}/>}
                    {logo.iconifyClassname === "udemy" && <img src={udemy} alt="udemy" width={60}/>}
                  </a>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
