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

const EventForm: React.FC = () => {
  const nombre = useFormInput("");
  const deporte = useFormInput("");
  const description = useFormInput("");
  const place = useFormInput("");
  const time = useFormInput("");

  // const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(nombre.value);
    console.log(deporte.value);
    console.log(description.value);
    console.log(time.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="nombre"
          name="name"
          type="text"
          value="name"
          {...nombre}
        />

        <Input
          label="deporte"
          name="sport"
          type="text"
          value="sport"
          {...deporte}
        />

        <Input
          label="descripción"
          name="description"
          type="text"
          value="description"
          {...description}
        />

        <Input
          label="lugar"
          name="place"
          type="text"
          value="place"
          {...place}
        />

        <Input label="hora" name="time" type="text" value="time" {...time} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default EventForm;
