import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin-bottom: 24px;
`;

export const Label = styled.span`
  cursor: pointer;
  font-size: 14px;
  margin-right: 16px;
  ${(p) => p.isActive && `
    text-decoration: underline;
    color: lightblue;
  `}
`;
