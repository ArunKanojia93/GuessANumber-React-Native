import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {Card} from '../Card';
import {Input} from '../Input';
import {NumberContainer} from '../NumberContainer';
import {MainButton, CancelButton} from '../Buttons';

interface StartGameScreenProps {
  onStartGame: any;
}

export const StartGameScreen: React.FC<StartGameScreenProps> = (props) => {
  const [enteredValue = '', setEnteredValue] = useState();
  const [confirmed = false, setConfirmed] = useState();
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>();
  const [
    buttonWidth = Dimensions.get('window').width / 4,
    setButtonWidth,
  ] = useState();

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  const numberInputHandler = (inputText: any) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'cancel', onPress: resetInputHandler}],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={Styles.finalConfirmationContainer}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              marginBottom: 12,
            }}>
            Are you sure?:
          </Text>
          <NumberContainer selectedNumber={selectedNumber} />
        </View>
        <View style={{alignItems: 'center'}}>
          <MainButton
            style={{width: buttonWidth}}
            onPress={() => {
              props.onStartGame(selectedNumber);
            }}>
            Yess!
          </MainButton>
        </View>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={Styles.screen}>
            <Text style={Styles.title}>LET'S PLAY!</Text>
            <Card style={Styles.inputContainer}>
              <Text style={Styles.heading}>Enter a Number</Text>
              <Input
                blurOnSubmit
                keyboardType={'numeric'}
                maxLength={2}
                style={Styles.input}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={Styles.buttonContainer}>
                <CancelButton
                  style={{width: buttonWidth}}
                  onPress={resetInputHandler}>
                  RESET
                </CancelButton>
                <MainButton
                  style={{width: buttonWidth}}
                  onPress={confirmInputHandler}>
                  CONFIRM
                </MainButton>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
    fontFamily: 'RobotoSlab-Bold',
    letterSpacing: 2,
    textShadowRadius: 4,
    textShadowColor: '#fff',
    textShadowOffset: {width: 2, height: 3},
  },
  inputContainer: {
    width: '80%',
    maxWidth: '90%',
    minWidth: 300,
    alignItems: 'center',
    borderBottomEndRadius: 32,
  },
  input: {
    height: 40,
    width: 40,
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Merriweather-Bold',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  finalConfirmationContainer: {
    width: 240,
    maxWidth: '80%',
    borderRadius: 8,
  },
});
