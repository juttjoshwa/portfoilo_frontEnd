import React from "react";
import "./SkillsBar.css";
import { useSelector } from "react-redux";
import "./About.css";
import coding from "../../asset/coding.png";
import { Link } from "react-router-dom";
import react from "../../asset/skills/react.png";
import mongoDB from "../../asset/skills/mongodb.png";
import express from "../../asset/skills/express.png";
import Javascript from "../../asset/skills/javsS.png";
import NODE from "../../asset/skills/nodejs.png";

const About = () => {
  const Change = useSelector((state) => state.DarkMode);

  const darkNavbar = {
    background:
      "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)",
  };
  let darkcolor;
  if (Change === "dark") {
    darkcolor = darkNavbar;
  }

  const darktext = {
    color: "aliceblue",
  };
  let DarkText;
  if (Change === "dark") {
    DarkText = darktext;
  }

  const AvatarIcon = {
    filter: " invert(100%) brightness(100%) contrast(50%)",
  };
  let AvatarStyle;
  if (Change === "dark") {
    AvatarStyle = AvatarIcon;
  }

  return (
    <div style={darkcolor} className="p-5" id="about">
      <div className="container-fluid">
        <div className="row">
          <div style={DarkText} className="col-md-12 col-lg-6">
            <h3 className="Yashwa text-capitalize d-flex justify-content-center align-items-center">
              About my self
            </h3>
            <p className="p-4">
              As a developer, you are someone who uses programming languages and
              tools to create software, websites, and applications. You are
              responsible for writing code, testing and debugging it, and
              maintaining and updating the software. Depending on your skills
              and interests, you may specialize in a specific area such as web
              development, mobile development, or game development. You may also
              have experience with various programming languages, frameworks,
              and libraries. Additionally, you may have experience working with
              version control systems such as Git, and be familiar with Agile
              development methodologies
              <br />
              <Link to="/contact" type="button">
                <img
                  data-aos="fade-up"
                  data-aos-duration="700"
                  style={AvatarStyle}
                  className="img-fluid m-3 mt-md-5  borderBack imgAbout hoverEffect"
                  src={coding}
                />
              </Link>
              <Link to="/contact" type="button">
                <img
                  data-aos="fade-up"
                  data-aos-duration="900"
                  style={AvatarStyle}
                  className="img-fluid m-3 mt-md-5 borderBack  imgAbout hoverEffect"
                  src={react}
                />
              </Link>
              <Link to="/contact" type="button">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  style={AvatarStyle}
                  className="img-fluid m-3 mt-md-5 borderBack mx-md-5 imgAbout hoverEffect"
                  src={mongoDB}
                />
              </Link>
            </p>
          </div>
          <div
            className="col-md-12 col-lg-6 SkillBar mt-2"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="containerS">
              <h1 className="title-text text-center">React Progress Bar</h1>

              <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                  <span className="skill-per html">
                    <span className="tooltip">95%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                  <span className="skill-per css">
                    <span className="tooltip">80%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                  <span className="skill-per javascript">
                    <span className="tooltip">60%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">NodeJS</span>
                <div className="skill-bar">
                  <span className="skill-per nodejs">
                    <span className="tooltip">40%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                  <span className="skill-per reactjs">
                    <span className="tooltip">70%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">ExpressJS</span>
                <div className="skill-bar">
                  <span className="skill-per expressjs">
                    <span className="tooltip">75%</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="llllImgContainer">
              <Link type="button" to="/contact">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="img-fluid mt-5 m-4 borderBack imgAbout hoverEffect"
                  src={express}
                />
              </Link>
              <Link type="button" to="/contact">
                <img
                  style={AvatarStyle}
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  className="img-fluid mt-5 m-4 borderBack imgAbout hoverEffect"
                  src={Javascript}
                />
              </Link>
              <Link type="button" to="/contact">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1300"
                  className="img-fluid mt-5 m-4 borderBack imgAbout hoverEffect"
                  src={NODE}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
