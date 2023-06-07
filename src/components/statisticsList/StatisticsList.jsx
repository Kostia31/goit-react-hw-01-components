import PropTypes from 'prop-types';

import Statistics from 'components/statistics/Statistics';

function StatisticsList({ data }) {
  return (
    <ul>
      {data.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <Statistics item={label} />
          <Statistics item={percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })),
};

export default StatisticsList;
