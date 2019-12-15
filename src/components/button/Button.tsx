import * as React from "react";

import styled from "@emotion/styled";
export interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <BUTTON type="submit">{text}</BUTTON>;
};

export default Button;

const BUTTON = styled.button`
  display: inline-block;
  font-family: "roboto";
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  color: white;
  background-color: #1f2833;
  opacity: 0.9;
  border: 1px solid #66fcf1;
  border-radius: 3px;
  cursor: pointer;
`;
