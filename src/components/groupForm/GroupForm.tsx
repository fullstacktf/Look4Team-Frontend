import * as React from "react";

import styled from "@emotion/styled";
import Button from "../button/Button";
import Input from "../input/Input";
import { useFormInput } from "../../hooks/useFormInput";
export interface GroupFormProps {}

const GroupForm: React.FC = () => {
  const name = useFormInput("");
  const image = useFormInput("");
  const description = useFormInput("");
  const user = useFormInput("");

  // const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name.value);
    console.log(image.value);
    console.log(description.value);
    console.log(user.value);
  };
  return (
    <div>
      <FORM onSubmit={handleSubmit}>
        <Input label="Nombre" name="name" type="text" {...name} />

        <Input label="Imagen" name="image" type="file" {...image} />

        <Input label="Usuarios" name="user" type="text" {...user} />

        <Input
          label="descripción"
          name="description"
          type="text"
          {...description}
          // value="description"
        />
        <div>
          <Button text="CREAR GRUPO" />
        </div>
        {/* <input type="submit" /> */}
      </FORM>
    </div>
  );
};

const FORM = styled.form`
  background-color: #f0f0f0;
  display: inline-block;
  padding: 1.5rem;
  border: 1px solid #c5c6c7;
  border-radius: 2px;
  font-size: 1rem;

  label {
    display: block;
  }

  div {
    padding: 0.4em;
  }

  div:last-child {
    text-align: center;
    padding-top: 1em;
  }

  input:nth-child() {
    background-color: red;
  }
`;

export default GroupForm;
