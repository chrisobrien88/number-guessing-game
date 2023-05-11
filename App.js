import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#3d8ce7", "#0a1829"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/cat1.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.7 }}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
