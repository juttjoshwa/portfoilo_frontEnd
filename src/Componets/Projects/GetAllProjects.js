import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GetAllProjects.css";
import Navbar from "../Navbar/Navbar.js";
import { useSelector } from "react-redux";

const GetAllProjects = () => {
  const Change = useSelector((state) => state.DarkMode);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      const res = await axios.get("https://protfolio-db.vercel.app/api/v1/createproject");
      setProjects(res.data.project);
      setLoading(false);
    };
    getProjects();
  }, []);

  const preLoader = (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  const darkNavbar = {
    background:
      "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)",
  };
  let darkcolor;
  if (Change === "dark") {
    darkcolor = darkNavbar;
  }

  return (
    <div
      style={darkcolor}
      className="HomeROW"
      data-aos="fade-up"
      data-aos-anchor=".other-element"
      data-aos-duration="900"
    >
      <Navbar />
      {loading ? (
        <div className="preloader">{preLoader}</div>
      ) : (
        <div className="Project card-container">
          {projects.map((project) => (
            <div className="card cared-pillls" key={project._id}>
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {project.description}
                </h6>
                <p className="card-text">{project.Sample}</p>
                <a href={project.Url} className="card-link btn-primary">
                  Project Link
                </a>
              </div>
              <div className="card-footer text-muted">
                Created At: {new Date(project.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetAllProjects;
