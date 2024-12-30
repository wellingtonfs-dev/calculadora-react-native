import React from "react";
import { Calc } from "./src/components/Calc";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
  <>
    <Calc />;
    <StatusBar backgroundColor="#333" />
  </>
  )
}
