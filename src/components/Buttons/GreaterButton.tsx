import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

const myIcon = <Icon name="plus" size={30} color={'#fff'} />;

interface GreaterButtonProps {
  onPress: any;
}

export const GreaterButton: React.FunctionComponent<GreaterButtonProps> = (
  props,
) => {
  return (
    <TouchableOpacity activeOpacity={0.1} onPress={props.onPress}>
      <View
        style={{
          padding: 12,
          borderRadius: 50,
          backgroundColor: Colors.primary,
          elevation: 10,
        }}>
        {myIcon}
      </View>
    </TouchableOpacity>
  );
};
