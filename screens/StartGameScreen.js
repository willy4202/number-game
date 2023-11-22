import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import theme from "../styles/theme";

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
    <View style={styles.container}>
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
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: theme.blue700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#00000",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
