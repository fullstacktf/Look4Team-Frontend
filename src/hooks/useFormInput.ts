import { useState } from "react";

export interface valuesType {
  initialEventData?: object;
  name: string;
  sport: string;
  place: string;
<<<<<<< HEAD
  datetime: string;
=======
  time: string;
>>>>>>> 2bde0c24bef634d4c0ea866793f8137a99db6d60
  description: string;
}

export const useFormInput = callback => {
  let initialValues: valuesType = {
    name: "",
    sport: "",
    place: "",
<<<<<<< HEAD
    datetime: "",
=======
    time: "",
>>>>>>> 2bde0c24bef634d4c0ea866793f8137a99db6d60
    description: ""
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
