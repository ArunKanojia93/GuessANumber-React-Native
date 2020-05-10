import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CardProps {
  style?: any;
}

export const Card: React.FC<CardProps> = (props) => {
  return <View style={{...Styles.card, ...props.style}}>{props.children}</View>;
};

const Styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 16,
    marginVertical: 10,
  },
});
