import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

const myIcon = <Icon name="minus" size={30} color={'#fff'} />;

interface LowerButtonProps {
  onPress: any;
  style?: any;
}

export const LowerButton: React.FunctionComponent<LowerButtonProps> = (
  props,
) => {
  return (
    <TouchableOpacity activeOpacity={0.1} onPress={props.onPress}>
      <View style={{...Styles.button, ...props.style}}>{myIcon}</View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: Colors.secondary,
    elevation: 10,
  },
});
