import React from "react";
import { InputContainer, InputField, InputLabel } from "./LocalStyle";

interface InputProps {
  title: string;
}

const Input: React.FC<InputProps> = ({ title }) => {
  return (
    <InputContainer>
      <InputField type="text" id="input" placeholder=" " required />
      <InputLabel htmlFor="input">{title}</InputLabel>
    </InputContainer>
  );
};

export default Input;
