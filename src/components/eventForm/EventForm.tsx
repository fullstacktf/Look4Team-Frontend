import * as React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { EventCard } from "../../services/events/models";
import { useFormInput } from "../../hooks/useFormInput";
<<<<<<< HEAD
import Request from "superagent";
=======
>>>>>>> 2bde0c24bef634d4c0ea866793f8137a99db6d60

export interface EventFormProps {}

const EventForm: React.FC = () => {
<<<<<<< HEAD
  // const { token } = useAuth()
  const sendform = () => {
    Request.post("https://look4.team/api/events")
      .send(inputs)
      // .set ( {headers: {authorization: `Bearer ${token}`}})c
      .then(console.log(inputs))
      .catch(err => console.log("ha sucedido un error", err));
=======
  const sendform = () => {
    console.log(inputs.name);
    alert("creado");
    // Request.post("https://look4.team/api/events")
    // .send(value)
    // .set("Content-Type", "application/json")
    // .then(console.log(value))
    // .catch(err => console.log("ha sucedido un error", err));
>>>>>>> 2bde0c24bef634d4c0ea866793f8137a99db6d60
    // alert("tu evento ha sido creado!");
  };

  const { inputs, handleInputChange, handleSubmit } = useFormInput(sendform);

  return (
    <div>
      test
      <FORM onSubmit={handleSubmit}>
        <Input
          label="nombre"
          name="name"
          type="text"
          onChange={handleInputChange}
          value={inputs.name}
        />

        <Input
          label="deporte"
          name="sport"
          type="text"
          onChange={handleInputChange}
          value={inputs.sport}
        />

        <Input
          label="lugar"
          name="place"
          type="text"
          onChange={handleInputChange}
          value={inputs.place}
        />

        <Input
          label="hora"
<<<<<<< HEAD
          name="datetime"
          type="datetime-local"
          onChange={handleInputChange}
          value={inputs.datetime}
=======
          name="time"
          type="text"
          onChange={handleInputChange}
          value={inputs.time}
>>>>>>> 2bde0c24bef634d4c0ea866793f8137a99db6d60
        />
        <Input
          label="descripción"
          name="description"
          type="text"
          onChange={handleInputChange}
          value={inputs.description}
        />
        <div>
          <Button text="CREAR EVENTO" />
        </div>
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
