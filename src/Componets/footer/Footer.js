import React from "react";
import { useSelector } from "react-redux";
import "./Footer.css";
import facebook from "../../asset/facebook.png";
import Insta from "../../asset/instagram.png";
import WA from "../../asset/whatsapp.png";
import Git from "../../asset/github.png";
import Linkedin from "../../asset/linkedin.png";

const Footer = () => {
  const Change = useSelector((state) => state.DarkMode);

  const darktext = {
    color: "white",
  };
  let DarkText;
  if (Change === "dark") {
    DarkText = darktext;
  }

  const darkHero = {
    background:
      "radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%)",
  };
  let DarkHero;
  if (Change === "dark") {
    DarkHero = darkHero;
  }

  const AvatarIcon = {
    filter: " invert(100%) brightness(150%) contrast(150%)",
  };
  let AvatarStyle;
  if (Change === "dark") {
    AvatarStyle = AvatarIcon;
  }

  return (
    <div style={DarkHero} className="Footer">
      <div id="email" className="container">
        <div className="row">
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            style={DarkText}
            className="Yashwa text-capitalize mt-5 text-center"
          >
            Send Email
          </h2>
          <div className="col col-12 ">
            <form
              data-aos="zoom-in"
              data-aos-duration="500"
              action="https://formspree.io/f/xknaneev"
              method="POST"
            >
              <div className="mb-3">
                <label
                  style={DarkText}
                  htmlFor="exampleInputPassword1"
                  className="form-label fw-bold space-left2"
                >
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label
                  style={DarkText}
                  htmlFor="exampleInputPassword1"
                  className="form-label fw-bold"
                >
                  Massage
                </label>
                <textarea
                  type="massage"
                  name="message"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label
                  style={DarkText}
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div
                  id="emailHelp"
                  style={DarkText}
                  className="form-text fw-bold"
                >
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  style={DarkText}
                  className="form-check-label fw-bold"
                  htmlFor="exampleCheck1"
                >
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary hoverEffect">
                Submit
              </button>
            </form>
          </div>
          <div className="LinkContainer mt-5 display-5 Yashwa">
            <h2 style={DarkText}>Links :</h2>
            <img
              data-aos="zoom-in"
              data-aos-duration="500"
              style={AvatarStyle}
              className="logoimg1 m-2 hoverEffect "
              alt="facebaook"
              src={facebook}
            />
            <img
              data-aos="zoom-in"
              data-aos-duration="500"
              style={AvatarStyle}
              className="logoimg1 m-2 hoverEffect "
              alt="instagram"
              src={Insta}
            />
            <a
            href="#homePage">
              
              <img
                data-aos="zoom-in"
                data-aos-duration="500"
                style={AvatarStyle}
                className="logoimg1 m-2 hoverEffect"
                alt="whatsapp"
                src={WA}
              />
            </a>
            <img
              data-aos="zoom-in"
              data-aos-duration="500"
              style={AvatarStyle}
              className="logoimg1 m-2 hoverEffect"
              alt="linkedin"
              src={Linkedin}
            />
            <a href="https://github.com/juttjoshwa">
              <img
                data-aos="zoom-in"
                data-aos-duration="500"
                style={AvatarStyle}
                className="logoimg1 m-2 hoverEffect"
                alt="Git"
                src={Git}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
