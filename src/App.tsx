import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Header} from './components';
import {StartGameScreen, GameScreen} from './components/screens';
import {GameOverScreen} from './components/screens/GameOverScreen';

const App: React.FC = () => {
  const [userNumber, setUserNumber] = useState<number | undefined>();
  const [guessRounds = 0, setGuessRounds] = useState();

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };

  const restartGameHandler = () => {
    setUserNumber(undefined);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds: number) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen
        userChoice={userNumber}
        restartGame={restartGameHandler}
        onGameOver={gameOverHandler}
      />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        numberOfRounds={guessRounds}
        userNumber={userNumber}
        startNewGame={restartGameHandler}
      />
    );
  }

  return (
    <View style={Styles.screen}>
      <View style={Styles.semiCircle}></View>
      <Header title={'Guess a Number'} />
      {content}
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  semiCircle: {
    position: 'absolute',
    width: 800,
    height: 800,
    borderRadius: 800 / 2,
    backgroundColor: 'aqua',
    top: '-28%',
    left: '-108%',
  },
});

export default App;
