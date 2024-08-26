import React from "react";
import { styled } from "@linaria/react";

const StyledButton = styled.button`
  background-color: orange;
  padding: 8px 4px;
  border-radius: 20px;
  color: white;

  &:hover {
    background-color: blue;
  }
`;

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
