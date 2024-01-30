import PropTypes from 'prop-types';

import Notification from '../Notification/Notification.jsx';
import {
  StatisticsTitle,
  StatisticsUl,
  StatisticsLi,
} from './StatisticsStyles.js';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>

      {total === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <StatisticsUl>
          <StatisticsLi>Good: {good}</StatisticsLi>
          <StatisticsLi>Neutral: {neutral}</StatisticsLi>
          <StatisticsLi>Bad: {bad}</StatisticsLi>
          <StatisticsLi>Total: {total}</StatisticsLi>
          <StatisticsLi>Positive Feedback: {positivePercentage}%</StatisticsLi>
        </StatisticsUl>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
