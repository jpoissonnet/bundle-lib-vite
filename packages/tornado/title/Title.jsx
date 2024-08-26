import React from "react";

import { styled } from "@linaria/react";

const H1 = styled.h1`
  text-transform: uppercase;
  color: red;
  font-family: "Comic Sans MS";
`;

export const Title = ({ children }) => {
  return <H1>{children}</H1>;
};
