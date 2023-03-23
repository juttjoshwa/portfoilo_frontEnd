import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

const Project = () => {
  const Change = useSelector((state) => state.DarkMode);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [projects, setProjects] = useState([]);

  const deleteProject = async (id) => {
    try {
      await axios.delete(
        `https://protfolio-db.vercel.app/api/v1/createproject/${id}`
      );
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getProjects = async () => {
      const res = await axios.get(
        "https://protfolio-db.vercel.app/api/v1/createproject"
      );
      setProjects(res.data.project);
    };
    getProjects();
  }, []);

  console.log(projects);

  const textColor = {
    color: "white",
  };
  let darkColor;
  if (Change === "dark") {
    darkColor = textColor;
  }

  const darkNavbar = {
    background:
      "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)",
  };
  let darkcolor;
  if (Change === "dark") {
    darkcolor = darkNavbar;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://protfolio-db.vercel.app/api/v1/createproject",
        {
          name,
          description,
          Url: url,
        }
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={darkcolor}
      className="HomeROW"
      data-aos="fade-up"
      data-aos-anchor=".other-element"
      data-aos-duration="700"
    >
      <Navbar />
      <form onSubmit={handleSubmit} className="formProject">
        <label style={darkColor}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label style={darkColor}>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label style={darkColor}>
          Url:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <br />

        <button type="submit" className="hoverEffect">Create Project</button>
      </form>
      <div
        style={darkcolor}
        className="HomeROW"
        data-aos="fade-up"
        data-aos-anchor=".other-element"
        data-aos-duration="700"
      >
        <div className="Project card-container">
          {projects.map((project) => (
            <div className="card" key={project._id}>
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
              <button onClick={() => deleteProject(project._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
