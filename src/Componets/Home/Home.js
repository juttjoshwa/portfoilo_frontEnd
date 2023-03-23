import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar.js";
import HERO from "../../asset/heroimg.gif";
import About from "../About/About";
import phone from "../../asset/phone.png";
import email from "../../asset/email.png";
import Footer from "../footer/Footer";
import { IncreseView } from "../../actions";

const Home = () => {
  const Change = useSelector((state) => state.DarkMode);

  const darkNavbar = {
    background:
      "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)",
  };
  let darkcolor;
  if (Change === "dark") {
    darkcolor = darkNavbar;
  }

  const darkHero = {
    background:
      "radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%)",
  };
  let DarkHero;
  if (Change === "dark") {
    DarkHero = darkHero;
  }

  const darktext = {
    color: "aliceblue",
  };
  let DarkText;
  if (Change === "dark") {
    DarkText = darktext;
  }

  const AvatarIcon = {
    filter: " invert(100%) brightness(150%) contrast(150%)",
  };
  let AvatarStyle;
  if (Change === "dark") {
    AvatarStyle = AvatarIcon;
  }

  return (
    <>
      <div>
        <div
          style={darkcolor}
          className="HomeROW"
          data-aos="fade-up"
          data-aos-anchor=".other-element"
          data-aos-duration="700"
        >
          <Navbar />
          <div className="main">
            <div className="container Container">
              <div style={DarkHero} className="row HeroBg">
                <div className="col-lg-7 col-md-12 p-5 hiiiiOrder">
                  <img className="img-fluid p-2 HeroBg HEROIMG" src={HERO} />
                </div>
                <div className="col-lg-5 col-md-12 hiiiiOrder1">
                  <div style={DarkText}>
                    <h4 className="Hi">
                      Hi
                      <span>
                        {" "}
                        my name is
                        <br />
                        <h2 className="Yashwa">Yashwa Shahzad</h2>
                      </span>
                    </h4>
                    <h3 className="MERN">MERN stack developer</h3>
                    <div id="homePage" className="Para">
                      Experienced full-stack developer skilled in building
                      scalable and efficient web applications using the MERN
                      stack. Expertise in building full-stack web applications
                      using the MERN stack, with a focus on creating efficient
                      and scalable solutions.
                    </div>
                    <Link
                      to="/project"
                      type="button"
                      className="btn btn-primary mt-5 leaveInfo hoverEffect "
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      See My Projets
                    </Link>
                    <div className="MERN mt-5">
                      <h4>Short Contact</h4>
                    </div>
                    <div className="IdContainer container MERN mt-3" >
                      <div className="row">
                        <div className="col-2">
                          <img
                            style={AvatarStyle}
                            className="logoimg1"
                            src={phone}
                          />
                        </div>
                        <div className="col-10" >
                          <h4 className="mt-1">03096704559</h4>
                        </div>
                      </div>
                    </div>
                    <div className="IdContainer container MERN">
                      <div className="row">
                        <div className="col-2">
                          <img
                            style={AvatarStyle}
                            className="logoimg1"
                            src={email}
                          />
                        </div>
                        <div className="col-10">
                          <h4 className="mt-1">juttjoshwa@gmail.com</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About />
        <Footer />
      </div>
    </>
  );
};

export default Home;
