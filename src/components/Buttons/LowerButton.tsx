import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
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
  let ButtonComponent: any = TouchableNativeFeedback;

  if (Platform.OS !== 'android' && Platform.Version < 21) {
    ButtonComponent === TouchableOpacity;
  }

  return (
    <View style={{overflow: 'hidden', borderRadius: 50}}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={{...Styles.button, ...props.style}}>{myIcon}</View>
      </ButtonComponent>
    </View>
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
