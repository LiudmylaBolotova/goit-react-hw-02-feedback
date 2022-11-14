import styled from 'styled-components';

export const FeedbackButton = styled.button`
  width: ${p => p.theme.sizes.width[0]}px;
  height: ${p => p.theme.sizes.height}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round}px;
  margin: ${p => p.theme.space[3]}px;
  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  transition: ${p => p.theme.transitions.transitionBtn};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.color};
    border-color: ${p => p.theme.colors.borderColor};
  }
`;
