import * as React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { EventCard } from "../../services/events/models";
import { useFormInput } from "../../hooks/useFormInput";
import Request from "superagent";

export interface EventFormProps {}

const EventForm: React.FC = () => {
  // const { token } = useAuth()
  const sendform = () => {
    Request.post("https://look4.team/api/events")
      .send(inputs)
      // .set ( {headers: {authorization: `Bearer ${token}`}})c
      .then(console.log(inputs))
      .catch(err => console.log("ha sucedido un error", err));
    // alert("tu evento ha sido creado!");
  };

  const { inputs, handleInputChange, handleSubmit } = useFormInput(sendform);

  return (
    <DIV>
      <FORM onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          onChange={handleInputChange}
          value={inputs.name}
          placeholder="Nombre"
        />

        <Input
          placeholder="Sport"
          name="sport"
          type="text"
          onChange={handleInputChange}
          value={inputs.sport}
        />

        <Input
          placeholder="Place"
          name="place"
          type="text"
          onChange={handleInputChange}
          value={inputs.place}
        />

        <Input
          placeholder="Hora"
          name="datetime"
          type="datetime-local"
          onChange={handleInputChange}
          value={inputs.datetime}
        />
        <Input
          placeholder="Descripción"
          name="description"
          type="text"
          onChange={handleInputChange}
          value={inputs.description}
        />

        <Input
          placeholder=""
          name="description"
          type="file"
          onChange={handleInputChange}
          value={inputs.image}
        />
        <div>
          <Button text="CREAR EVENTO" />
        </div>
      </FORM>
    </DIV>
  );
};
export default EventForm;

const DIV = styled.div`
  margin: auto;
  width: 40%;
  /* background-color: red; */
`;
const FORM = styled.form`
  padding: 1.5em;
  border-radius: 2px;
  font-size: 1rem;

  div:last-child {
    text-align: center;
    padding-top: 1em;
  }

  :before {
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
  }
`;
