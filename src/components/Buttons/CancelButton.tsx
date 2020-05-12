import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

interface CancelButtonProps {
  onPress: any;
  style?: any;
}

export const CancelButton: React.FunctionComponent<CancelButtonProps> = (
  props,
) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...Styles.button, ...props.style}}>
        <Text style={Styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoSlab-Bold',
    textAlign: 'center',
    fontSize: 12,
  },
});
