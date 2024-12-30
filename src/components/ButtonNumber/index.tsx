import React from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";

type ButtonProps = {
  label: string;  
  onPress?: () => void;
};

export function ButtonNumber({ label, onPress }: ButtonProps) {
  return (    
      <Pressable style={styles.container}  onPress={onPress} >
        <Text style={styles.text}>{label}</Text>
      </Pressable>    
  );
}
