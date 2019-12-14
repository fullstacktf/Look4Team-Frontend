import * as React from "react";

import styled from "@emotion/styled";
import { useState } from "react";
import Input from "../input/Input";
export interface EventFormProps {}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}

const SignIn: React.FC = () => {
  const email = useFormInput("");
  const password = useFormInput("");

  // const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email.value);
  };
  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="email"
            name="email"
            type="email"
            value="email"
            {...email}
          />
        </div>
        <div>
          <Input
            label="password"
            name="password"
            type="password"
            value="password"
            {...password}
          />
        </div>
        <input type="submit" />
      </form>
    </DIV>
  );
};

export default SignIn;

//superagit

const DIV = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 45%;
  border: 1px solid black;
  div {
  }
`;
