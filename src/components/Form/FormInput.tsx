import styled from "styled-components";

export const FormInput = styled.input`
  flex: 1 1 100%;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  background: transparent;
  box-sizing: border-box;
  color: black;
  &:focus {
    outline: 2px solid #007bff;
  }
`;
