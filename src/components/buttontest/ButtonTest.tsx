import * as React from "react";

import styled from "@emotion/styled";
export interface ButtonTestProps {}

const ButtonTest: React.FC = () => {
  return <BUTTON>CREA UN EVENTO</BUTTON>;
};

export default ButtonTest;

// const BUTTON = styled.button`
//   display: inline-block;
//   font-family: "roboto";
//   font-size: 1rem;
//   font-weight: bold;
//   padding: 1rem 2.5rem 1rem 2.5rem;

//   outline: none;
//   color: #42a29e;
//   background-color: white;
//   transition: 0.6s;

//   border: 2px solid #1f2833;
//   border-radius: 3px;
//   cursor: pointer;
//   &:hover {
//     background-color: #1f2833;
//     color: #66fcf1;
//     background-color: rgba(0, 0, 0, 0.5);
//     border: 2px solid #1f2833;
//   }
// `;

const BUTTON = styled.button`
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 20px;
  border: 4px solid #494949 !important;
  display: inline-block;
  transition: all 0.4s ease 0s;
  /* font-family: "roboto"; */
  font-size: 1rem;
  /* font-weight: bold; */

  :hover {
    color: #ffffff !important;
    background: #42a29e;
    border-color: #42a29e !important;
    transition: all 0.4s ease 0s !important;
  }
`;
