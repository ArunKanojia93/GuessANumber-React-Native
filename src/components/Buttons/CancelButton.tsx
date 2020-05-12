import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

interface CancelButtonProps {
  onPress: any;
  style?: any;
}

export const CancelButton: React.FunctionComponent<CancelButtonProps> = (
  props,
) => {
  let ButtonComponent: any = TouchableNativeFeedback;

  if (Platform.OS !== 'android' && Platform.Version < 21) {
    ButtonComponent === TouchableOpacity;
  }

  return (
    <View style={{overflow: 'hidden', borderRadius: 20}}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={{...Styles.button, ...props.style}}>
          <Text style={Styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
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
