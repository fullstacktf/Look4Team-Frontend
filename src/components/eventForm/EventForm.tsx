import * as React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { useFormInput } from "../../hooks/useFormInput";
import { EventCard } from "../../services/events/models";
import Request from "superagent";

// export interface EventFormProps {
//   EventCard[];
// }

const EventForm: React.FC = () => {
  const name = useFormInput("");
  const sport = useFormInput("");
  const description = useFormInput("");
  const place = useFormInput("");
  const time = useFormInput("");
  const [value, setValue] = useState({
    name: "",
    sport: "",
    description: "",
    datetime: "",
    place: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    setValue({
      name: name.value,
      sport: sport.value,
      description: description.value,
      datetime: time.value,
      place: place.value
    });

    //@ts-ignore
    Request.post("https://look4.team/api/events")
      .send(value)
      .set("Content-Type", "application/json")
      .then(console.log(value))
      .catch(err => console.log("ha sucedido un error", err));
    // alert("tu evento ha sido creado!");
  };
  const handleValue = () => {};
  return (
    <div>
      <FORM onSubmit={handleSubmit}>
        <Input
          label="nombre"
          name="name"
          type="text"
          {...name}
          required={true}
        />

        <Input label="deporte" name="sport" type="text" {...sport} />

        <Input
          label="lugar"
          name="place"
          type="text"
          {...place}
          required={true}
        />

        <Input
          label="hora"
          name="time"
          type="datetime-local"
          {...time}
          required={true}
        />
        <Input
          label="descripción"
          name="description"
          type="text"
          {...description}
        />
        <div>
          <Button text="CREAR EVENTO" />
        </div>
        {/* <input type="submit" /> */}
      </FORM>
    </div>
  );
};

export default EventForm;

const FORM = styled.form`
  background-color: #f0f0f0;
  display: inline-block;
  padding: 1.5rem;
  border: 1px solid #c5c6c7;
  border-radius: 2px;
  font-size: 1rem;

  div:last-child {
    text-align: center;
    padding-top: 1em;
  }

  input:nth-child() {
    background-color: red;
  }
`;
