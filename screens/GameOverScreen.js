import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Title>Klever Kat can read your mind!</Title>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/surprisedCat.jpg")}
          style={styles.image}
        />
      </View>

      <Text style={styles.summaryText}>
        He only needed <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightedText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>
        Play Again
        </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    marginTop: 24,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 28,
    color: Colors.secondary400,
    textAlign: "center",
    marginBottom: 10,
  },
  highlightedText: {
    fontFamily: "open-sans-bold",
    color: Colors.secondary500,
    }
});
