import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import GameScreen from "./screens/GameScreen";

export default function App() {

  const [userNumber, setUserNumber] = useState(null);

  const pickedNumberHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userChoice={userNumber} />;
  }

  return (
    <LinearGradient colors={["#3d8ce7", "#0a1829"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/cat1.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.7 }}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
