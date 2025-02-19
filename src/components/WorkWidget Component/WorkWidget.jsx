import PropTypes from 'prop-types';
import './WorkWidget.css';

const WorkWidget = ({ title, content, experiences }) => {
  return (
    <section data-testid="workWidget" className="work-widget">
      <h2 data-testid="workWidgetTitle">{title}</h2>
      <p data-testid="workWidgetContent">{content}</p>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index} data-testid={`workWidgetItem${index}`}>
            <div className="work-item">
              <image
                data-testid={`workWidgetItemLogo${index}`}
                src={experience.logo}
                alt={`${experience.organization} Logo`}
              />
              <div className="work-item-content">
                <h3 data-testid={`workWidgetItemTitle${index}`}>{experience.organization}</h3>
                <div className="work-item-content-details">
                  <p data-testid={`workWidgetItemContent${index}`}>{experience.jobTitle}</p>
                  <span data-testid={`workWidgetItemDates${index}`}>
                    {experience.startYear} - {experience.endYear || 'current'}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
