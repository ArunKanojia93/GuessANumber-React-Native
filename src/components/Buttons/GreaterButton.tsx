import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

const myIcon = <Icon name="plus" size={30} color={'#fff'} />;

interface GreaterButtonProps {
  onPress: any;
  style?: any;
}

export const GreaterButton: React.FunctionComponent<GreaterButtonProps> = (
  props,
) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={{...Styles.button, ...props.style}}>{myIcon}</View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    elevation: 10,
  },
});
