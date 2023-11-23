import { Alert, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import theme from "../styles/theme";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import GuideText from "../components/ui/GuideText";

const StartGameScreen = ({ numberHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleEneteredInput = (value) => {
    console.log(value);
    setEnteredNumber(value);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "유효하지 않은 숫자입니다.",
        "1에서 99사이의 숫자를 입력해주세요",
        [{ text: "확인", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    numberHandler(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my Number</Title>
      <Card>
        <GuideText>Enter a Number</GuideText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoComplete="off"
          value={enteredNumber}
          onChangeText={handleEneteredInput}
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

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  buttonContainer: {
    flex: 1,
  },

  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: theme.yellow300,
    borderBottomWidth: 2,
    color: theme.yellow300,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
});
