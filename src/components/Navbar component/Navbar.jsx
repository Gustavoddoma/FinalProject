import './Navbar.css';
import PropTypes from 'prop-types';


function Navbar({ options }) {
  return (
    <nav data-testid="nav" className={'navbar'}>
      <ul data-testid="ul">
        {options.map((option, index) => (
          <li data-testid={`li${index}`} key={index}>
            <a data-testid={`a${index}`} className="link" href={option.path}>
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
