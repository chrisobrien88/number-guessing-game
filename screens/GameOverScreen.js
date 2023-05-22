import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.screen}>
        <Title>Klever Kat can read your mind!</Title>

        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/surprisedCat.jpg")}
            style={styles.image}
          />
        </View>

        <Text style={styles.summaryText}>
          He only needed{" "}
          <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlightedText}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onRestart}>Play Again</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

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
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
  },
});
