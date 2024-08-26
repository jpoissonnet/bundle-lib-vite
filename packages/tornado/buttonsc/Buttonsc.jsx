import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: orange;
  padding: 8px 4px;
  border-radius: 20px;
  color: white;

  &:hover {
    border-color: blue;
  }
`;

export const Buttonsc = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
