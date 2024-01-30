import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics.jsx';

export const App = () => {
  const countTotalFeedback = () => {
    setTotal(total + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    if (total === 0) {
      return 0;
    }

    return Math.round((state.good / total) * 100);
  };

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [total, setTotal] = useState(0);

  const handleButtonClick = e => {
    const buttonClickedValue = e.target.textContent;

    setState(prevState => {
      switch (buttonClickedValue) {
        case 'Good':
          return { ...prevState, good: prevState.good + 1 };
        case 'Neutral':
          return { ...prevState, neutral: prevState.neutral + 1 };
        case 'Bad':
          return { ...prevState, bad: prevState.bad + 1 };
        default:
          return prevState;
      }
    });
    countTotalFeedback();
  };

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
