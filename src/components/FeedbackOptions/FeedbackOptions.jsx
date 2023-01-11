import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClickButton }) => {
  return options.map(option => (
    <div key={option}>
      <FeedbackButton type="button" onClick={onClickButton}>
        {option}
      </FeedbackButton>
    </div>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClickButton: PropTypes.func.isRequired,
};
