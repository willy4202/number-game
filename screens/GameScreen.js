import { Alert, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import GuideText from "../components/ui/GuideText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";
import theme from "../styles/theme";

const generateRandomBetween = (min, max, exlcude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exlcude) {
    return generateRandomBetween(min, max, exlcude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoudnary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initalGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCureentGuess] = useState(initalGuess);
  const [guessRound, setGuessRound] = useState([initalGuess]);
  const guessRoundListLength = guessRound.length;
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRoundListLength);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoudnary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("거짓말입니다.", "잘못된 정보를 알려줬습니다.", [
        { text: "다시하기", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoudnary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoudnary,
      currentGuess
    );
    setCureentGuess(newRndNumber);
    setGuessRound((prev) => [newRndNumber, ...prev]);
  };

  return (
    <View style={styles.screen}>
      <Title>업,다운을 알려주세요</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View>
          {/* Cascade 적용을 위한 style prop 전달 */}
          <GuideText style={styles.guideText}>Higer or Lower?</GuideText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons name="md-remove" size={24} color={theme.white} />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                <Ionicons name="md-add" size={24} color={theme.white} />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* <Text>Log Rounds</Text> */}

        <FlatList
          data={guessRound}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - index}
              guessNumber={item}
            />
          )}
          keyExtractor={({ item }) => item}
        />
      </View>
      {/* <PrimaryButton onPress={generateRandomBetween}>랜덤 생성</PrimaryButton> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24 },

  guideText: {
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },

  listContainer: {
    flex: 1,

    padding: 24,
  },
});
