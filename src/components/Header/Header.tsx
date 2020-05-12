import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const [
    availableDeviceHeight = Dimensions.get('window').height,
    setAvailableDeviceHeight,
  ] = useState();

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  if (availableDeviceHeight < 420) {
    return (
      <View style={Styles.headerSmall}>
        <Text style={Styles.titleSmall}>{props.title}</Text>
      </View>
    );
  }

  return (
    <View style={Styles.header}>
      <Text style={Styles.title}>{props.title}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 10,
    backgroundColor: Colors.header,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    elevation: 10,
  },
  title: {
    color: '#476cff',
    fontSize: 32,
    fontFamily: 'Merriweather-Black',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 4,
    textShadowColor: '#fff',
  },
  headerSmall: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.header,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    elevation: 10,
  },
  titleSmall: {
    color: '#476cff',
    fontSize: 24,
    fontFamily: 'Merriweather-Black',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 4,
    textShadowColor: '#fff',
  },
});
