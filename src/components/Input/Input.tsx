import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface InputProps {
  style?: any;
  placeholder?: string;
  blurOnSubmit?: boolean;
  maxLength?: number;
  keyboardType?: any;
  onChangeText: any;
  value?: any;
}

export const Input: React.FC<InputProps> = (props) => {
  return <TextInput {...props} style={{...Styles.input, ...props.style}} />;
};

const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, .2)',
    marginVertical: 12,
  },
});
