import React from "react";
import { InputContainer } from "./LocalStyle";
import { IonInput, IonInputPasswordToggle } from "@ionic/react";

interface InputProps {
  title: string;
  type?: any;
}

const Input: React.FC<InputProps> = ({ title, type = "text" }) => {
  return (
    <InputContainer>
      <IonInput
        label={title}
        labelPlacement="floating"
        fill="outline"
        placeholder={title}
        type={type}
      >
        {type === "password" && (
          <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
        )}
      </IonInput>
    </InputContainer>
  );
};

export default Input;
