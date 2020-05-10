import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';

interface MainButtonProps {
  onPress: any;
}

export const MainButton: React.FunctionComponent<MainButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={Styles.button}>
        <Text style={Styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 40,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 18,
  },
});
