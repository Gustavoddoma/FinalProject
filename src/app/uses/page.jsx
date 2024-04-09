import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar component/Navbar.jsx";
import Footer from "../../components/Footer component/Footer.jsx";
import "../../components/Footer component/Footer.css";
import UsesCard from "../../components/Uses Card Component/UsesCard.jsx";
import "../../components/Uses Card Component/UsesCard.css";
import UsesSection from "../../components/Uses Section Component/UsesSection.jsx";
import "../../components/Uses Section Component/UsesSection.css";

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export default function Uses() {
  const UsesCardComponent = ({ title, content }) => {
    return (
      <div className={'uses-card'}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  };

  UsesCardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  const usesItems = [
    {
      groupName: "Workstation",
      items: [
        { title: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu." },
        { title: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu." },
        { title: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu." },
        { title: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu." },
        { title: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu." },
      ],
    },
    {
      groupName: "Development Tools",
      items: [
        { title: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu." },
        { title: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu." },
      ],
    },
  ];

  const UsesSectionComponent = ({ items }) => {
    return (
      <section className="uses-section">
        <div className="uses-section__content">
          {items.map((group, index) => (
            <div className="uses-section__group" key={index}>
              <h2>{group.groupName}</h2>
              <div className="uses-section__group-content">
                {group.items.map((item, i) => (
                  <UsesCardComponent title={item.title} content={item.description} key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  UsesSectionComponent.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        groupName: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
          })
        ),
      })
    ),
  };

  UsesSectionComponent.defaultProps = {
    items: [],
  };

  const options = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/uses', label: 'Uses' },
  ];

  return (
    <div>
      <header>
        <Navbar options={options} />
      </header>
      <main>
        <h1>Software I use, gadgets I love, and other things I recommend</h1>
        <UsesSection items={usesItems} />
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
            <a href="/users">Users</a>
          </li>
        </ul>
        <div className="copyright">© 2024 John Doe, All rights reserved.</div>
      </footer>
    </div>
  );
}
