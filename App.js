import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';




import Colors from "./constants/colors";

import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gamesIsOver, setGamesIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const startNewGameHandler = () => {
    setGamesIsOver(false);
    setUserNumber(null);
    setGuessRounds(0);
  };

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const pickedNumberHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGamesIsOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGamesIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gamesIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={startNewGameHandler}/>;
  }


  return (
    <LinearGradient colors={[Colors.primary800, Colors.primary500, Colors.primary600]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/cat1.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.5 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
