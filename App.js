import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import theme from "./styles/theme";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const userNumberHandler = (number) => {
    setUserNumber(number);
    setGameIsOver(false);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen numberHandler={userNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[theme.yellow200, theme.yellow100]}
      style={styles.rootScreen}
    >
      {/* <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      > */}

      <SafeAreaView style={styles.andoridSafeArea}>{screen}</SafeAreaView>
      {/* </ImageBackground> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  // 안드로이드일 경우 safeArea적용
  andoridSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
