import PropTypes from 'prop-types';

function Statistics({ item}) {
  if (Number(item)) {
    return <span className="percentage">{item}%</span>;
  } else {
    return <span className="label">{item}</span>;
  }
}

Statistics.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
export default Statistics;
