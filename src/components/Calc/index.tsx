import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { InputCalc } from "../InputCalc";
import { ButtonNumber } from "../ButtonNumber";
import {FontAwesome5} from '@expo/vector-icons';

export function Calc() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operator, setOperator] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
  };

  const handleAddNumber = (number: string) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperator("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(sum.toString());
      setOperator("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperator("-");
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(minus.toString());
      setOperator("");
    }
  };

  const handlePercent = () => {
    if (currentNumber!== "0") {
      const percent = (Number(currentNumber) / 100) * Number(firstNumber);
      setCurrentNumber(percent.toString());
    }
  }

  const handleRoot = () => {
    if (currentNumber!== "0") {
      const root = Math.sqrt(Number(currentNumber));
      setCurrentNumber(root.toString());
    }
  }

  const handleMultiplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperator("x");
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(multiply.toString());
      setOperator("");
    }
  };

  const handleSplitNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperator("/");
    } else {
      const split = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(split.toString());
      setOperator("");
    }
  };

  const handleDel = () => {
    setCurrentNumber(currentNumber.slice(0, -1));
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operator !== "" && currentNumber !== "0") {
      switch (operator) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "x":
          handleMultiplyNumbers();
          break;
        case "/":
          handleSplitNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome5 name='calculator' size={30} color="#fff" />
        <Text style={styles.text}>Calculadora</Text>
      </View>
      <InputCalc number={currentNumber} />
      <View style={styles.line}>
        <ButtonNumber label="AC" onPress={handleOnClear} />
        <ButtonNumber icon="percent" onPress={handlePercent} />
        <ButtonNumber icon="square-root-alt" onPress={handleRoot} />
        <ButtonNumber icon="divide" onPress={handleSplitNumbers} />
      </View>
      <View style={styles.line}>
        <ButtonNumber label="7" onPress={() => handleAddNumber("7")} />
        <ButtonNumber label="8" onPress={() => handleAddNumber("8")} />
        <ButtonNumber label="9" onPress={() => handleAddNumber("9")} />
        <ButtonNumber icon="times" onPress={handleMultiplyNumbers} />
      </View>
      <View style={styles.line}>
        <ButtonNumber label="4" onPress={() => handleAddNumber("4")} />
        <ButtonNumber label="5" onPress={() => handleAddNumber("5")} />
        <ButtonNumber label="6" onPress={() => handleAddNumber("6")} />
        <ButtonNumber icon="minus" onPress={handleMinusNumbers} />
      </View>
      <View style={styles.line}>
        <ButtonNumber label="1" onPress={() => handleAddNumber("1")} />
        <ButtonNumber label="2" onPress={() => handleAddNumber("2")} />
        <ButtonNumber label="3" onPress={() => handleAddNumber("3")} />
        <ButtonNumber icon="plus" onPress={handleSumNumbers} />
      </View>
      <View style={styles.line}>
        <ButtonNumber label="," onPress={() => handleAddNumber(".")} />
        <ButtonNumber label="0" onPress={() => handleAddNumber("0")} />
        <ButtonNumber icon="backspace" onPress={handleDel} />
        <ButtonNumber icon="equals" onPress={handleEquals} />
      </View>
    </View>
  );
}
