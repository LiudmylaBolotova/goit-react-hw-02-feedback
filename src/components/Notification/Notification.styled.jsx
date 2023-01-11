import styled from 'styled-components';

export const Message = styled.p`
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;

  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.notificationColor};
`;
