import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics.jsx';

const useFeedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [total, setTotal] = useState(0);

  const countTotalFeedback = () => {
    setTotal(total + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    if (total === 0) {
      return 0;
    }

    return Math.round((state.good / total) * 100);
  };

  const handleButtonClick = feedbackType => {
    setState(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
    countTotalFeedback();
  };

  return {
    state,
    total,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
    handleButtonClick,
  };
};

export const App = () => {
  const {
    state,
    total,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
    handleButtonClick,
  } = useFeedback();

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state).map(
            option => option.charAt(0).toUpperCase() + option.slice(1)
          )}
          onLeaveFeedback={handleButtonClick}
        />
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};
