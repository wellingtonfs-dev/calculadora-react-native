import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import {FontAwesome5} from '@expo/vector-icons';

import { styles } from "./styles";

type ButtonProps = {
  label?: string; 
  icon?: string; 
  onPress?: () => void;
};

export function ButtonNumber({ label, onPress, icon }: ButtonProps) {
  const isIcon = !!icon;
  return (    
      <TouchableOpacity style={[ 
        styles.container, 
        isIcon ? styles.iconBackground : styles.labelBackground 
      ]}  
      onPress={onPress} 
    > 
        {icon ?(
          <FontAwesome5 name={icon} size={30} color="#fff" />
          ) : (
          <Text style={styles.text}>{label}</Text>
        )}        
      </TouchableOpacity>    
  );
}
