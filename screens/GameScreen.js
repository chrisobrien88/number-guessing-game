import { View, Text } from "react-native";

const GameScreen = () => {
  return (
    <View>
      <Text>Opponent's guess</Text>
      Guess
      <View>
        <Text>Higher or Lower?</Text>+ -
      </View>
    </View>
  );
};

export default GameScreen;
