import * as React from "react";

import styled from "@emotion/styled";
import Input from "../input/Input";
import { useFormInput } from "../../hooks/useFormInput";
import Button from "../button/Button";
export interface SearchBarProps {}

const SearchBar1: React.FC = () => {
  const words = useFormInput("");
  const sport = useFormInput("");
  const place = useFormInput("");
  const date = useFormInput("");

  // const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // const { name, sport } = e.target.value;
    console.log(words.value);
    console.log(sport.value);
    console.log(place.value);
    console.log(date.value);
  };
  return (
    <DIV>
      <Input
        label="Palabras Clave"
        type="text"
        name="words"
        value="words"
        onChange
        {...words}
      />
      <Input
        label="Deporte"
        type="text"
        name="sport"
        value="sport"
        onChange
        {...sport}
      />
      <Input
        label="Lugar"
        type="text"
        name="place"
        value="place"
        onChange
        {...place}
      />
      <Input
        label="Fecha"
        type="date"
        name="date"
        value="date"
        onChange
        {...date}
      />
      <Button text="BUSCAR" />
    </DIV>
  );
};

const DIV = styled.div`
  margin: auto;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 2px;
  background-color: #f0f0f0;
`;

export default SearchBar1;
