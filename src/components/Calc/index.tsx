import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { InputCalc } from "../InputCalc";
import { ButtonNumber } from "../ButtonNumber";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonRow } from "../ButtonRow";

// Definição dos tipos
type Operator = "+" | "-" | "x" | "/" | "";

// Funções utilitárias
const calculateResult = (
  firstNumber: string,
  currentNumber: string,
  operator: Operator
): string => {
  const num1 = Number(firstNumber);
  const num2 = Number(currentNumber);

  switch (operator) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "x":
      return (num1 * num2).toString();
    case "/":
      return num2 !== 0 ? (num1 / num2).toString() : "Error"; // Evitar divisão por zero
    default:
      return currentNumber;
  }
};

export function Calc(): JSX.Element {
  const [currentNumber, setCurrentNumber] = useState<string>("0");
  const [firstNumber, setFirstNumber] = useState<string>("0");
  const [operator, setOperator] = useState<Operator>("");

  const resetCalculator = (): void => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperator("");
  };

  const addNumber = (number: string): void => {
    setCurrentNumber((prev) => (prev === "0" ? number : `${prev}${number}`));
  };

  const setOperation = (operation: Operator): void => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperator(operation);
    } else {
      const result = calculateResult(firstNumber, currentNumber, operator);
      setFirstNumber(result);
      setCurrentNumber("0");
      setOperator(operation);
    }
  };

  const calculateEquals = (): void => {
    if (firstNumber !== "0" && operator && currentNumber !== "0") {
      const result = calculateResult(firstNumber, currentNumber, operator);
      setCurrentNumber(result);
      setFirstNumber("0");
      setOperator("");
    }
  };

  const calculatePercent = (): void => {
    if (currentNumber !== "0" && firstNumber !== "0" && operator) {
      const num1 = Number(firstNumber);
      const num2 = Number(currentNumber) / 100; // Converte para fração (ex.: 50 -> 0.5)
  
      // Aplica a porcentagem ao número base (firstNumber)
      const result = num1 * num2;
  
      setCurrentNumber(result.toString());
    } else if (currentNumber !== "0") {
      // Caso não haja uma operação em andamento, transforma apenas o número atual em porcentagem
      setCurrentNumber((Number(currentNumber) / 100).toString());
    }
  };
  

  const calculateRoot = (): void => {
    if (currentNumber !== "0") {
      setCurrentNumber(Math.sqrt(Number(currentNumber)).toString());
    }
  };

  const deleteLastDigit = (): void => {
    setCurrentNumber((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome5 name="calculator" size={30} color="#fff" />
        <Text style={styles.text}>Calculadora</Text>
      </View>
      <InputCalc number={currentNumber} />

      {/* Linhas de botões */}
      <ButtonRow
        buttons={[
          { label: "AC", onPress: resetCalculator },
          { icon: "percent", onPress: calculatePercent },
          { icon: "square-root-alt", onPress: calculateRoot },
          { icon: "divide", onPress: () => setOperation("/") },
        ]}
      />
      <ButtonRow
        buttons={[
          { label: "7", onPress: () => addNumber("7") },
          { label: "8", onPress: () => addNumber("8") },
          { label: "9", onPress: () => addNumber("9") },
          { icon: "times", onPress: () => setOperation("x") },
        ]}
      />
      <ButtonRow
        buttons={[
          { label: "4", onPress: () => addNumber("4") },
          { label: "5", onPress: () => addNumber("5") },
          { label: "6", onPress: () => addNumber("6") },
          { icon: "minus", onPress: () => setOperation("-") },
        ]}
      />
      <ButtonRow
        buttons={[
          { label: "1", onPress: () => addNumber("1") },
          { label: "2", onPress: () => addNumber("2") },
          { label: "3", onPress: () => addNumber("3") },
          { icon: "plus", onPress: () => setOperation("+") },
        ]}
      />
      <ButtonRow
        buttons={[
          { label: ".", onPress: () => addNumber(".") },
          { label: "0", onPress: () => addNumber("0") },
          { icon: "backspace", onPress: deleteLastDigit },
          { icon: "equals", onPress: calculateEquals },
        ]}
      />
    </View>
  );
}
