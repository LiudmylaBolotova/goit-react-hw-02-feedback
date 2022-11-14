import PropTypes from 'prop-types';
import { PartsSection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <PartsSection>
      <Title>{title}</Title>
      {children}
    </PartsSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
