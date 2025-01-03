import React from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";

type InputCalcProps = {
  number: string;
};

export function InputCalc({ number }: InputCalcProps) {
  return (
    <TextInput
      value={number}
      style={styles.container}
      multiline // Permite múltiplas linhas
      editable={false} // Impede que o usuário edite o texto
      textAlign="right" // Alinha o texto à direita, como em uma calculadora
    />
  );
}
