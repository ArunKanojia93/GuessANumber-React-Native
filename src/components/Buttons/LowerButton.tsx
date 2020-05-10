import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

const myIcon = <Icon name="minus" size={30} color={'#fff'} />;

interface LowerButtonProps {
  onPress: any;
}

export const LowerButton: React.FunctionComponent<LowerButtonProps> = (
  props,
) => {
  return (
    <TouchableOpacity activeOpacity={0.1} onPress={props.onPress}>
      <View
        style={{
          padding: 12,
          borderRadius: 50,
          backgroundColor: Colors.secondary,
          elevation: 10,
        }}>
        {myIcon}
      </View>
    </TouchableOpacity>
  );
};
