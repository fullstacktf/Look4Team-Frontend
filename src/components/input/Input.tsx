import * as React from "react";
import styled from "@emotion/styled";

export interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  onChange?: any;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder
}) => {
  return (
    <DIV>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </DIV>
  );
};

const DIV = styled.div`
  padding: 0.4em;
  input {
    outline: none;

    width: 100%;
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
  }
`;

export default Input;
