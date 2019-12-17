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
  padding: 0.4rem;

  label {
    display: block;
  }
`;

export default Input;
