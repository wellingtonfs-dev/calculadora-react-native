import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { InputCalc } from "../InputCalc";
import { ButtonNumber } from "../ButtonNumber";
import { FontAwesome5 } from "@expo/vector-icons";

export function Calc(): JSX.Element {
  const [currentNumber, setCurrentNumber] = useState<string>("0");
  const [firstNumber, setFirstNumber] = useState<string>("0");
  const [operator, setOperator] = useState<string>("");
  const [history, setHistory] = useState<string>(""); // Novo estado para histórico

  const resetCalculator = (): void => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperator("");
    setHistory(""); // Limpa o histórico
  };

  const addNumber = (number: string): void => {
    setCurrentNumber((prev) => (prev === "0" ? number : `${prev}${number}`));
    setHistory((prev) => `${prev}${number}`); // Atualiza o histórico
  };

  const setOperation = (operation: string): void => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperator(operation);
      setHistory((prev) => `${prev} ${operation} `); // Adiciona o operador ao histórico
    } else {
      const result = calculateResult(firstNumber, currentNumber, operator);
      setFirstNumber(result);
      setCurrentNumber("0");
      setOperator(operation);
      setHistory(`${result} ${operation} `); // Atualiza o histórico com o resultado e o operador
    }
  };

  const calculateEquals = (): void => {
    if (firstNumber !== "0" && operator && currentNumber !== "0") {
      const result = calculateResult(firstNumber, currentNumber, operator);
      setCurrentNumber(result);
      setFirstNumber("0");
      setOperator("");
      setHistory(`${history} = ${result}`); // Mostra o resultado no histórico
    }
  };

  const calculatePercent = (): void => {
    if (firstNumber !== "0" && operator && currentNumber !== "0") {
      // Calcula a porcentagem do primeiro número
      const percent = (Number(firstNumber) * Number(currentNumber)) / 100;
      setCurrentNumber(percent.toString());
      setHistory((prev) => `${prev}%`); // Adiciona '%' ao histórico
    } else if (currentNumber !== "0") {
      // Transforma o número atual em uma fração (ex.: 50 -> 0.5)
      const percent = Number(currentNumber) / 100;
      setCurrentNumber(percent.toString());
      setHistory((prev) => `${prev}%`); // Adiciona '%' ao histórico
    }
  };

  const calculateRoot = (): void => {
    if (currentNumber !== "0") {
      const root = Math.sqrt(Number(currentNumber)).toString();
      setCurrentNumber(root);
      setHistory((prev) => `√(${prev})`); // Adiciona a operação raiz ao histórico
    }
  };

  const deleteLastDigit = (): void => {
    setCurrentNumber((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    setHistory((prev) => prev.slice(0, -1)); // Remove o último caractere do histórico
  };

  const calculateResult = (
    firstNumber: string,
    currentNumber: string,
    operator: string
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
        return num2 !== 0 ? (num1 / num2).toString() : "Error";
      default:
        return currentNumber;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome5 name="calculator" size={30} color="#fff" />
        <Text style={styles.text}>Calculadora</Text>
      </View>
      <InputCalc number={`${history}\n${currentNumber}`} /> {/* Exibe histórico e número atual */}

      {/* Linhas de botões */}
      <View style={styles.line}>
        <ButtonNumber label="AC" onPress={resetCalculator} />
        <ButtonNumber icon="percent" onPress={calculatePercent} />
        <ButtonNumber icon="square-root-alt" onPress={calculateRoot} />
        <ButtonNumber icon="divide" onPress={() => setOperation("/")} />
      </View>
      <View style={styles.line}>
        <ButtonNumber label="7" onPress={() => addNumber("7")} />
        <ButtonNumber label="8" onPress={() => addNumber("8")} />
        <ButtonNumber label="9" onPress={() => addNumber("9")} />
        <ButtonNumber icon="times" onPress={() => setOperation("x")} />
      </View>
      <View style={styles.line}>
        <ButtonNumber label="4" onPress={() => addNumber("4")} />
        <ButtonNumber label="5" onPress={() => addNumber("5")} />
        <ButtonNumber label="6" onPress={() => addNumber("6")} />
        <ButtonNumber icon="minus" onPress={() => setOperation("-")} />
      </View>
      <View style={styles.line}>
        <ButtonNumber label="1" onPress={() => addNumber("1")} />
        <ButtonNumber label="2" onPress={() => addNumber("2")} />
        <ButtonNumber label="3" onPress={() => addNumber("3")} />
        <ButtonNumber icon="plus" onPress={() => setOperation("+")} />
      </View>
      <View style={styles.line}>
        <ButtonNumber label="." onPress={() => addNumber(".")} />
        <ButtonNumber label="0" onPress={() => addNumber("0")} />
        <ButtonNumber icon="backspace" onPress={deleteLastDigit} />
        <ButtonNumber icon="equals" onPress={calculateEquals} />
      </View>
    </View>
  );
}
