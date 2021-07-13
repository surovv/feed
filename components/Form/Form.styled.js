import styled from 'styled-components';

export const FieldContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 16px;
  width: 100%;
  border: 1px solid gray;

  &:focus {
    border-color: lightblue;
    outline: none;
  }
`;

export const Label = styled.label`
  margin-right: 16px;
`;
