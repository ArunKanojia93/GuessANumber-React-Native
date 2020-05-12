import React, {useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
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
    <SafeAreaView style={Styles.screen}>
      <ImageBackground
        source={require('./assets/images/wall.jpg')}
        style={Styles.wall}>
        <Header title={'Guess a Number'} />
        {content}
      </ImageBackground>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  wall: {
    flex: 1,
  },
});

export default App;
