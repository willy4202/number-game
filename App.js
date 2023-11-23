import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { LinearGradient } from "expo-linear-gradient";
import theme from "./styles/theme";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

// expo 프로젝트의 경우 expo-font를 사용하면 쉽게 폰트적용이 가능

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "noto-sans": require("./assets/font/NotoSansKR-VariableFont_wght.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

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
