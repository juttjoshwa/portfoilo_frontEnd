import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import "./Contact.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/thanks");
  };

  const Change = useSelector((state) => state.DarkMode);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessgae] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    if (name && email && message) {
      formdata.append("name", name);
      formdata.append("Email", email);
      formdata.append("feedback", message);
    } else {
      return alert("All Fields Are Require Only Image is Optional");
    }
    try {
      // const postMethod = await axios.post("http://localhost:9000/api/v1/user1",formdata);
      const postMethod = await axios.post(
        "http://localhost:9000/api/v1/user1",
        formdata
      );
      setName("");
      setEmail("");
      setMessgae("");
      handleClick();
    } catch (error) {
      console.log(error);
    }
  };

  const dark = {
    background:
      " linear-gradient(89.7deg, rgb(0, 0, 0) -10.7%, rgb(53, 92, 125) 88.8%)",
  };
  let DarkContact;
  if (Change === "dark") {
    DarkContact = dark;
  }

  const darktext = {
    color: "aliceblue",
  };
  let DarkText;
  if (Change === "dark") {
    DarkText = darktext;
  }

  return (
    <div style={DarkContact} data-aos="zoom-in-up" data-aos-duration="700">
      <div className="navColor">
        <Navbar />
      </div>
      <div style={DarkText} className="container ">
        <div className="row containerC">
          <div className="col-12">
            <h1 className="Yashwa text-center mb-5">Fill the form</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessgae(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
