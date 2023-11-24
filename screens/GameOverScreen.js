import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import theme from "../styles/theme";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.screen}>
      <Title>GameOver</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      {/* Text안에 Text컴포넌트를 감싸는 것이 가능하다. */}
      <Text style={styles.summaryText}>
        your phone needed
        <Text style={styles.highlight}>{roundNumber}</Text> Rounds to guess the
        number
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: theme.blue400,
    overflow: "hidden",
    // margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    // fontFamily: "noto-sans",
    fontWeight: "300",
    fontSize: 24,
    marginVertical: 40,
  },
  highlight: {
    fontWeight: "600",
    color: theme.blue400,
  },
});
