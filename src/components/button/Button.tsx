import * as React from "react";

import styled from "@emotion/styled";
export interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <BUTTON>{text}</BUTTON>;
};

export default Button;

const BUTTON = styled.button`
  font-family: "roboto";
  padding: 0.6rem;

  font-size: 1rem;
`;
