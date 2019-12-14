import * as React from "react";

import styled from "@emotion/styled";
export interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <a href={link}>
      <BUTTON>{text}</BUTTON>
    </a>
  );
};

export default Button;

const BUTTON = styled.button`
  display: inline-block;
  font-family: "roboto";
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  color: #c5c6c7;
  background-color: #1f2833;
  opacity: 0.9;
  border: 1px solid #66fcf1;
  border-radius: 3px;
`;
