import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface NumberContainerProps {
  selectedNumber: number | undefined;
  style?: any;
}

export const NumberContainer: React.FC<NumberContainerProps> = (props) => {
  return (
    <Text style={{...Styles.finalConfirmationText, ...props.style}}>
      {props.selectedNumber}
    </Text>
  );
};

const Styles = StyleSheet.create({
  finalConfirmationText: {
    fontSize: 36,
    fontFamily: 'Merriweather-Black',
    color: 'magenta',
    textShadowColor: '#000',
    borderWidth: 4,
    marginVertical: 10,
    borderColor: '#40e0d0',
    borderRadius: 10,
    width: 60,
    height: 60,
    textAlign: 'center',
  },
});
