import styled from 'styled-components';

export const PartsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${p => p.theme.colors.backgroundColor};
  width: ${p => p.theme.sizes.width[1]}px;
  margin: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[5]}px;
  list-style: none;
`;

export const Title = styled.h2`
  text-transform: uppercase;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.transitions.transitionTitle};
  }
`;
