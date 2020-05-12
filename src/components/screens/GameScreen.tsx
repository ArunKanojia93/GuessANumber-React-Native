import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  FlatList,
  Dimensions,
} from 'react-native';
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

export const GameScreen: React.FC<GameScreenProps> = (props) => {
  const {userChoice, onGameOver, restartGame} = props;

  const initialGuess = generateRandomBetween(1, 100, userChoice);

  const [currentGuess = initialGuess, setCurrentGuess] = useState();
  const [pastGuesses = [initialGuess.toString()], setPastGuesses] = useState();
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

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  let listItemStyle = Styles.listItem;

  if (availableDeviceHeight > 600) {
    listItemStyle = Styles.listItemBig;
  }

  const renderListItem = useCallback(
    (itemData: any) => {
      return (
        <View style={listItemStyle}>
          <Text>#{pastGuesses.length - itemData.index}</Text>
          <Text>{itemData.item}</Text>
        </View>
      );
    },
    [pastGuesses],
  );

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = useCallback(
    (direction: string) => {
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
        currentLow.current = currentGuess + 1;
      }
      const nextNumber = generateRandomBetween(
        currentLow.current,
        currentHigh.current,
        currentGuess,
      );
      setCurrentGuess(nextNumber);
      setPastGuesses([nextNumber.toString(), ...(pastGuesses || [])]);
    },
    [currentGuess],
  );

  if (availableDeviceHeight < 420) {
    return (
      <View style={Styles.screen}>
        <Text style={Styles.heading}>My Guess is</Text>
        <View style={Styles.smallButtonContainer}>
          <LowerButton
            style={{padding: 4}}
            onPress={() => {
              nextGuessHandler('lower');
            }}
          />
          <NumberContainer
            style={Styles.numberContainer}
            selectedNumber={currentGuess}
          />
          <GreaterButton
            style={{padding: 4}}
            onPress={() => {
              nextGuessHandler('greater');
            }}
          />
        </View>
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem}
        />
        <CancelButton style={Styles.restartSmall} onPress={restartGame}>
          RESTART GAME
        </CancelButton>
      </View>
    );
  }

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
      <View style={Styles.restart}>
        <CancelButton style={{margin: 2}} onPress={restartGame}>
          RESTART GAME
        </CancelButton>
      </View>
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
    marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
    width: 300,
    maxWidth: '80%',
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Merriweather-Bold',
    textDecorationLine: 'underline',
  },
  listItem: {
    width: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    marginVertical: 2,
    padding: 6,
  },
  listItemBig: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    marginVertical: 4,
    padding: 10,
  },
  restart: {
    width: 200,
    marginBottom: '8%',
  },
  smallButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-around',
  },
  headingSmall: {
    fontSize: 12,
  },
  restartSmall: {
    width: '40%',
  },
  numberContainer: {
    fontSize: 20,
    width: 40,
    height: 40,
  },
});
