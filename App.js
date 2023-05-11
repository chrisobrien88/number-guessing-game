import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import Colors from "./constants/colors";

import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const pickedNumberHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
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
