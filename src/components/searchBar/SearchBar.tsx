import * as React from "react";
import styled from "@emotion/styled";
import Input from "../input/Input";
import { useFormInput } from "../../hooks/useFormInput";

import Button from "../button/Button";
export interface SearchBarProps {}
const DIV = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SearchBar: React.FC = () => {
  // const sendform = () => {
  //   console.log("searching");
  // };

  // const { inputs, handleInputChange, handleSubmit } = useFormInput(sendform);

  return (
    // <DIV>
    //   <form onSubmit={handleSubmit}>
    //     <Input
    //       name="Palabras Claves"
    //       type="Palabras Claves"
    //       value={inputs}
    //       placeholder="Palabras Clave"
    //       onChange={handleInputChange}
    //     />
    //     <Input
    //       name="Deporte"
    //       type="Deporte"
    //       value="Deporte"
    //       onChange={handleInputChange}
    //       placeholder="Deporte"
    //     />
    //     <Input
    //       name="Lugar"
    //       type="Lugar"
    //       value="Lugar"
    //       placeholder="Lugar"
    //       onChange={handleInputChange}
    //     />
    //     <Input
    //       name="Fecha"
    //       type="Fecha"
    //       value="Fecha"
    //       placeholder="Fecha"
    //       onChange={handleInputChange}
    //     />
    //     <div className="divbtn">
    //       <Button text="BUSCAR" />
    //     </div>
    //   </form>
    // </DIV>

    <DIV1>
      <INPUT type="text" placeholder="Palabras Clave" />
      <INPUT type="text" placeholder="Deporte" />
      <INPUT type="text" placeholder="Lugar" />
      <INPUT type="text" placeholder="Fecha" />
      <BUTTON>BUSCAR</BUTTON>
    </DIV1>
  );
};

const BUTTON = styled.button`
  /* margin: 1.5em; */
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: transparent;
  padding: 0.5em 0.5em 0.5em 0.5em;
  border: 3px solid #494949 !important;
  display: inline-block;
  transition: all 0.4s ease 0s;
  /* font-family: "roboto"; */
  font-size: 1em;
  /* font-weight: bold; */
  cursor: pointer;

  :hover {
    color: #ffffff !important;
    background: #42a29e;
    border-color: #42a29e !important;
    transition: all 0.4s ease 0s !important;
  }
`;

const DIV1 = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-around;
`;
const INPUT = styled.input`
  outline: none;

  margin: 10px 0;
  background: transparent;
  border: 0px;
  padding: 10px;
  outline: none;
  box-sizing: border-box;
  color: #1f2833;

  outline: none;
  border-bottom: 2px solid #1f2833;

  ::placeholder {
    color: #1f2833;
  }
`;

export default SearchBar;
