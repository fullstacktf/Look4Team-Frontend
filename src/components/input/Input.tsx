import * as React from "react";

export interface InputProps {
  type: string;
  name: string;
  onChange: any;
  value: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  onChange,
  value
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={event => {
          event.preventDefault();
          onChange(event);
        }}
      />
    </div>
  );
};

export default Input;
