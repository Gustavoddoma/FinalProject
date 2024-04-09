import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ links }) => (
  <footer data-testid="footer" className="footer">
    <ul>
      {links.map((link, index) => (
        <li key={index} data-testid={`footerLink${index}`}>
          <a href={link.url}>{link.title}</a>
        </li>
      ))}
    </ul>
    <p data-testid="footerContent">© {new Date().getFullYear()}</p>
  </footer>
);

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  links: [],
};

export default Footer;
