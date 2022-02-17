import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import { Card, Grid } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "../../components/blogCard/Card.scss"


export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        {/*<div*/}
        {/*  className="repo-card-div"*/}
        {/*  key={repo.id}*/}
        {/*  onClick={() => openRepoinNewTab(repo.url)}*/}
        {/*  style={{ backgroundColor: "white" }}*/}
        {/*>*/}

          {/*<div className="repo-name-div">*/}
          {/*  <svg*/}
          {/*    aria-hidden="true"*/}
          {/*    className="octicon repo-svg"*/}
          {/*    height="16"*/}
          {/*    role="img"*/}
          {/*    viewBox="0 0 12 16"*/}
          {/*    width="12"*/}
          {/*  >*/}
          {/*    <path*/}
          {/*      fill-rule="evenodd"*/}
          {/*      d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"*/}
          {/*    ></path>*/}
          {/*  </svg>*/}
          {/*  <p className="repo-name" style={{ color: theme.text }}>*/}
          {/*    {repo.name}*/}
          {/*  </p>*/}
          {/*</div>*/}
          {/*<p className="repo-description" style={{ color: theme.text }}>*/}
          {/*  {repo.description}*/}
          {/*</p>*/}





          <div className="card-game" key={repo.id}>
            <a href={`${repo.url}`} target="_blank" style={{textDecoration: "none"}}>
              <Card className="element-card-question">
                <Grid container className="card-question-practice">
                  <Grid item xs={12} className="text-uppercase text-dark mb-0">
                    {/*<BadgeCode/>*/}
                    <div className="category-name-title">{repo.name}</div>
                    <div
                      style={{
                        textTransform: "none",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                      }}
                    >
                      <div style={{ paddingRight: 5, marginTop: "20px" }}>
                        {/*<FiberManualRecordIcon className="dot-small" />*/}
                        {repo.name === "PTE Magic" && <img src={require("../../assests/images/PTE-MAGIC-Logo-Favicon-site-icon-3.png")} alt="" width={50}/>}
                        {repo.name === "Nauvus" && <img src={require("../../assests/images/Screen Shot 2022-02-14 at 22.11.20.png")} alt="" width={50}/>}
                        {repo.name === "react-nextjs-record" && <img src={require("../../assests/images/wnhbg07hmt77b5x94shs.jpeg")} alt="" width={80}/>}
                        {repo.name === "Agribank" && <img src={require("../../assests/images/agri.png")} alt="" width={50}/>}
                        {repo.name === "RMIT" && <img src={require("../../assests/images/RMIT-emblem.jpeg")} alt="" width={80}/>}
                        {repo.name === "SSI" && <img src={require("../../assests/images/ssi.png")} alt="" width={50}/>}
                        {repo.name === "Informa markets Electronic" && <img src={require("../../assests/images/info.png")} alt="" width={80}/>}
                        {/*<FiberManualRecordIcon className="dot-small" />*/}
                        {/*<FiberManualRecordIcon className="dot-small" />*/}
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <p className="repo-description" style={{ color: theme.text }}>
                  {repo.description}
                </p>
                {/*<div className="card-image" style={{display: "flex", justifyContent: "center"}}>*/}
                {/*  <img src={props.img} alt="" style={{width: "90%", height: "250px"}}/>*/}
                {/*</div>*/}
              </Card>
            </a>
          </div>
        {/*</div>*/}
      </Fade>
    </div>
  );
}
