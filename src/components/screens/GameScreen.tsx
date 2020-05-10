import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Alert, FlatList} from 'react-native';
import {NumberContainer} from '../NumberContainer';
import {Card} from '../Card';
import {LowerButton, GreaterButton, CancelButton} from '../Buttons';

interface GameScreenProps {
  userChoice: any;
  restartGame: any;
  onGameOver: any;
}

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number,
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (listLength: any, itemData: any) => (
  <View style={Styles.listItem}>
    <Text>{listLength - itemData.index}</Text>
    <Text>{itemData.item}</Text>
  </View>
);

export const GameScreen: React.FC<GameScreenProps> = (props) => {
  const {userChoice, onGameOver, restartGame} = props;

  const initialGuess = generateRandomBetween(1, 100, userChoice);

  const [currentGuess = initialGuess, setCurrentGuess] = useState();
  const [pastGuesses = [initialGuess.toString()], setPastGuesses] = useState();

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert('SERIOUSLY!!', "Don't try to trick me human...", [
        {text: 'Sorry', style: 'default'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setPastGuesses((currPastGuesses: any): any => [
      nextNumber.toString(),
      ...currPastGuesses,
    ]);
  };

  return (
    <View style={Styles.screen}>
      <Card style={{alignItems: 'center', borderBottomEndRadius: 32}}>
        <Text style={Styles.heading}>My Guess is</Text>
        <NumberContainer selectedNumber={currentGuess} />
        <View style={Styles.buttonContainer}>
          <LowerButton
            onPress={() => {
              nextGuessHandler('lower');
            }}
          />
          <GreaterButton
            onPress={() => {
              nextGuessHandler('greater');
            }}
          />
        </View>
      </Card>
      <FlatList
        keyExtractor={(item) => item}
        data={pastGuesses}
        renderItem={renderListItem}
      />
      <CancelButton onPress={restartGame}>RESTART GAME</CancelButton>
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Merriweather-Bold',
    textDecorationLine: 'underline',
  },
});
