import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

interface CancelButtonProps {
  onPress: any;
}

export const CancelButton: React.FunctionComponent<CancelButtonProps> = (
  props,
) => {
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
    position: 'absolute',
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 40,
    elevation: 8,
    left: '-20%',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 18,
  },
});
