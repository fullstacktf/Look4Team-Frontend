import * as React from "react";
import styled from "@emotion/styled";
import Input from "../input/Input";
import Button from "../button/Button";
import { useFormInput } from "../../hooks/useFormInput";

export interface EventFormProps {}

const EventForm: React.FC = () => {
  const name = useFormInput("");
  const sport = useFormInput("");
  const description = useFormInput("");
  const place = useFormInput("");
  const time = useFormInput("");

  // const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // const { name, sport } = e.target.value;
    console.log(name.value);
    console.log(sport.value);
    console.log(description.value);
    console.log(time.value);
    console.log(place.value);

    alert("tu evento ha sido creado!");
  };

  return (
    <div>
      <FORM onSubmit={handleSubmit}>
        <Input label="nombre" name="name" type="text" {...name} />

        <Input label="deporte" name="sport" type="text" {...sport} />

        <Input label="lugar" name="place" type="text" {...place} />

        <Input label="hora" name="time" type="text" value="time" {...time} />
        <Input
          label="descripción"
          name="description"
          type="text"
          {...description}
          // value="description"
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
