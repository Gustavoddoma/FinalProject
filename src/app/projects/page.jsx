import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar component/Navbar.jsx";
import FooterComponent from "../../components/Footer component/Footer.jsx"; // Renamed to avoid conflicts
import "../../components/Footer component/Footer.css";
import ProjectCard from "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Project Card component/ProjectCard.jsx";
import "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Project Card component/ProjectCard.css";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function Projects() {
  const ProjectCard = ({ logo, name, content, link }) => {
    return (
      <div data-testid="projectCard" className="project-card">
        <div>
          <img data-testid="projectCardLogo" src={logo} alt={`${name} Logo`} className="project-card-logo" />
          <h2 data-testid="projectCardName">{name}</h2>
        </div>
        <div>
          <p data-testid="projectCardContent">{content}</p>
          <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
            <img src="/link.svg" alt="" /> View Project
          </a>
        </div>
      </div>
    );
  };
  const options = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  return (
    <div>
      <header>
        <Navbar options={options} />
      </header>
      <main>
        <section>
          <ProjectCard
            logo="/path/to/logo.png"
            name="Company"
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
            link="/project-url"
          />
          {/* Add more ProjectCard components as needed */}
        </section>
        <ProjectCard
            logo="/path/to/logo.png"
            name="Company"
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
            link="/project-url"
          />
          <ProjectCard
            logo="/path/to/logo.png"
            name="Company"
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
            link="/project-url"
          />
          <ProjectCard
            logo="/path/to/logo.png"
            name="Company"
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
            link="/project-url"
          />
      </main>
      <aside>
        <section>{/* Other content goes here */}</section>
      </aside>
      <footer className="footer">
        <ul className="nav-links" style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/">Home</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/about">About</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/projects">Projects</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/uses">Uses</a>
          </li>
        </ul>
        <div className="copyright">© 2024 John Doe, All rights reserved.</div>
      </footer>
    </div>
  );
}
