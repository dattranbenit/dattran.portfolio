import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const vercel = require("../../assests/images/vercel.png")

class SoftwareSkill extends React.Component {
  words = ["nextjs", "springboot", "wordpress", "storybook", "MySql", "MongoDB", "vercel", "confluence", "jira", "gitlab", "slack", "microservice"]
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"/>
          <link rel="stylesheet" href="https://code.iconify.design/2/2.1.2/iconify.min.js"/>
          <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>

          <ul className="dev-icons">
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li className="software-skill-inline" name={logo.skillName}>
                    {!this.words.includes(logo.fontAwesomeClassname) && (
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}
                    {logo.fontAwesomeClassname === "wordpress" && <i className="devicon-wordpress-plain colored"></i>}
                    {logo.fontAwesomeClassname === "Redux" && <i className="devicon-redux-original colored"></i>}
                    {logo.fontAwesomeClassname === "nextjs" && <i className="devicon-nextjs-original colored"></i>}
                    {logo.fontAwesomeClassname === "storybook" && <i className="devicon-storybook-plain colored"></i>}
                    {logo.fontAwesomeClassname === "springboot" && <i className="devicon-spring-plain colored"></i>}
                    {logo.fontAwesomeClassname === "MySql" && <i className="devicon-mysql-plain colored"></i>}
                    {logo.fontAwesomeClassname === "MongoDB" && <i className="devicon-mongodb-plain colored"></i>}

                    {/*management*/}
                    {logo.fontAwesomeClassname === "confluence" && <i className="devicon-confluence-original colored"></i>}
                    {logo.fontAwesomeClassname === "jira" && <i className="devicon-jira-plain colored"></i>}
                    {logo.fontAwesomeClassname === "gitlab" && <i className="devicon-gitlab-plain colored"></i>}
                    {logo.fontAwesomeClassname === "slack" && <i className="devicon-slack-plain colored"></i>}
                    {logo.fontAwesomeClassname === "vercel" && <img src={vercel} alt="" width={45} />}
                    {logo.fontAwesomeClassname === "microservice" && <i className="devicon-microsoftsqlserver-plain colored"></i>}
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
