import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Colors from '../../constants/Colors';

interface MainButtonProps {
  onPress: any;
  style?: any;
}

export const MainButton: React.FunctionComponent<MainButtonProps> = (props) => {
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
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 12,
    textAlign: 'center',
  },
});
