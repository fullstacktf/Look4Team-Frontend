import { useState } from "react";

export interface valuesType {
  initialEventData?: object;
  name: string;
  sport: string;
  place: string;
  datetime: string;
  description: string;
  image: string;
}

export const useFormInput = callback => {
  let initialValues: valuesType = {
    name: "",
    sport: "",
    place: "",
    datetime: "",
    description: "",
    image: ""
  };
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};
