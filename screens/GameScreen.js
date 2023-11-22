import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";

const generateRandomBetween = (min, max, exlcude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exlcude) {
    return generateRandomBetween(min, max, exlcude);
  } else {
    return rndNum;
  }
};
const GameScreen = ({ userNumber }) => {
  const initalGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCureentGuess] = useState(initalGuess);

  return (
    <View style={styles.screen}>
      <Title>예상 숫자</Title>
      <View>
        <Text>Higer or Lower?</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
      <PrimaryButton onPress={generateRandomBetween}>랜덤 생성</PrimaryButton>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 24,
  },
});
