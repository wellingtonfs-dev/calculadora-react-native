import React from "react";
import { View } from "react-native";
import { ButtonNumber } from "../ButtonNumber";
import { styles } from "./styles"; 


type Button = {
  label?: string;
  icon?: string;
  onPress: () => void;
};


type ButtonRowProps = {
  buttons: Button[];
};


export const ButtonRow: React.FC<ButtonRowProps> = ({ buttons }) => (
  <View style={styles.line}>
    {buttons.map(({ label, icon, onPress }, index) => (
      <ButtonNumber
        key={label || icon || index.toString()}
        label={label}
        icon={icon}
        onPress={onPress}
      />
    ))}
  </View>
);
