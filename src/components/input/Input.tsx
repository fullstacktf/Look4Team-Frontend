import * as React from "react";
import styled from "@emotion/styled";

export interface InputProps {
  type: string;
  name: string;
  onChange: any;
  value: string;
  label: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  onChange,
  value,
  required
}) => {
  return (
    <DIV>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={event => {
          event.preventDefault();
          onChange(event);
        }}
        required={required}
      />
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
