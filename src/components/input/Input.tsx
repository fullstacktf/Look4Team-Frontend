import * as React from "react";
import styled from "@emotion/styled";

export interface InputProps {
  type: string;
  name: string;
  value: string;
  label: string;
  onChange: any;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange
}) => {
  return (
    <DIV>
      <label>{label}</label>
      <input name={name} type={type} value={value} onChange={onChange} />
    </DIV>
  );
};

const DIV = styled.div`
  /* label {
  display: block;
} */
  /* label {
    color: #c5ecfd;
  }
  input {
    outline: none;
    padding: 0.4rem;
    width: 100%;
    margin: 10px 0;
    background: transparent;
    border: 0px;
    padding: 10px;
    outline: none;
    box-sizing: border-box;
    color: #c5ecfd;

    outline: none;
    border-bottom: 2px solid #c5ecfd;
  } */
`;

export default Input;
