import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

type InputCalcProps = {
    number: string;
}


export function InputCalc({number} : InputCalcProps) {
  return (
      <TextInput value={number} style={styles.container}/>    
  );
}