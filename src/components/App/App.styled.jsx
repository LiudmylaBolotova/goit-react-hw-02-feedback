import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: ${p => p.theme.fontSizes[0]}px;
  color: ${p => p.theme.colors.text};
`;
