import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onClickButton }) => {
  return options.map(option => (
    <li key={option}>
      <button type="button" onClick={onClickButton}>
        {option}
      </button>
    </li>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClickButton: PropTypes.func.isRequired,
};
