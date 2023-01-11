import styled from 'styled-components';

export const StatisticList = styled.ul`
  list-style: none;
`;

export const StatisticItem = styled.li`
  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.transitions.transitionTitle};
  }
`;
