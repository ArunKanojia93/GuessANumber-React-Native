import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import {NumberContainer} from '../NumberContainer';
import {MainButton} from '../Buttons';

interface GameOverScreenProps {
  numberOfRounds: number;
  userNumber: number | undefined;
  startNewGame: any;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = (props) => {
  return (
    <ImageBackground
      source={require('../../assets/images/crop.jpeg')}
      style={Styles.image}>
      <View style={Styles.screen}>
        <Text style={Styles.title}>GOTCHA!</Text>
        <Text style={Styles.title}>Your number is:</Text>
        <NumberContainer selectedNumber={props.userNumber}></NumberContainer>
        <Text style={Styles.title}>
          Guessed in:{' '}
          <Text style={Styles.heading}>{props.numberOfRounds} Rounds</Text>
        </Text>
        <View style={{marginTop: 'auto', marginBottom: '20%'}}>
          <MainButton onPress={props.startNewGame}>START NEW GAME!!</MainButton>
        </View>
      </View>
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: '10%',
  },
  title: {
    fontSize: 24,
    marginTop: 5,
    fontFamily: 'RobotoSlab-Bold',
    letterSpacing: 2,
    textShadowRadius: 140,
    textShadowColor: '#000',
    color: '#fff',
  },
  heading: {
    fontSize: 28,
    fontFamily: 'Merriweather-Bold',
    textDecorationLine: 'underline',
    marginVertical: 20,
    color: '#7fff00',
  },
  image: {
    flex: 1,
  },
});
