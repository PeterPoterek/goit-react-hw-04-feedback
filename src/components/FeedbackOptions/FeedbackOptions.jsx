import PropTypes from 'prop-types';

import {
  FeedbackOptionsContainer,
  FeedbackButton,
} from './FeedbackOptionsStyles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsContainer>
      {options.map((option, index) => {
        return (
          <FeedbackButton key={index} onClick={onLeaveFeedback}>
            {option}
          </FeedbackButton>
        );
      })}
    </FeedbackOptionsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
