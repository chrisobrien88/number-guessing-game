import { TextInput, View, StyleSheet, Alert, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";

import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {

  // below the width and height of the device are extracted from the useWindowDimensions hook. 
  // This hook is more responsive than Dimensions.get("window").width and Dimensions.get("window").height
  // because it updates the width and height of the device when the device is rotated. 
  // The Dimensions API does not update the width and height of the device when the device is rotated.
  const { width, height } = useWindowDimensions();

  const [enteredNumber, setEnteredNumber] = useState("");

  // the text is input into the onChangeText prop of the TextInput component by React Native.
  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Ok", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
      <Title style={styles.rootContainer}>Klever Kat thinks he can read minds</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // the marginTop property is being set using the useWindowDimensions hook (line 16). 
    // See the marginTopDistance variable above and the array in the style prop of the View component above (line 46).
    // marginTop: 24,
    paddingVertical: 2,
    alignItems: "center",
  },

  numberInput: {
    height: 48,
    fontSize: 32,
    width: 50,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    marginBottom: 24,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default StartGameScreen;
