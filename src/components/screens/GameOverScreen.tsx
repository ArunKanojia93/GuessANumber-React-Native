import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import {NumberContainer} from '../NumberContainer';
import {MainButton} from '../Buttons';

interface GameOverScreenProps {
  numberOfRounds: number;
  userNumber: number | undefined;
  startNewGame: any;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = (props) => {
  const [
    buttonHeight = Dimensions.get('window').height,
    setButtonHeight,
  ] = useState();

  useEffect(() => {
    const updateLayout = () => {
      setButtonHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  return (
    <ImageBackground
      source={require('../../assets/images/crop.jpeg')}
      style={Styles.image}>
      <ScrollView>
        <View
          style={{
            ...Styles.screen,
            marginTop: buttonHeight < 420 ? '-2%' : '10%',
          }}>
          <Text style={Styles.title}>GOTCHA!</Text>
          <Text style={Styles.title}>Your number is:</Text>
          <NumberContainer selectedNumber={props.userNumber}></NumberContainer>
          <Text style={Styles.title}>
            Guessed in:{' '}
            <Text style={Styles.heading}>{props.numberOfRounds} Rounds</Text>
          </Text>
          <View style={{marginTop: buttonHeight > 600 ? 260 : 100}}>
            <MainButton
              style={{width: buttonHeight > 420 ? '100%' : 200}}
              onPress={props.startNewGame}>
              START NEW GAME!!
            </MainButton>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginTop: 5,
    fontFamily: 'RobotoSlab-Bold',
    letterSpacing: 2,
    textShadowRadius: 40,
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
