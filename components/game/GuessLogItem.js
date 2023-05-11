import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Klever Kat's guess was <Text style={{color: Colors.secondary500}}>{guess}</Text></Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Colors.primary600,
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    width: "100%",
    elevation: 5,
    shadowColor: "#414141",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  itemText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: Colors.primary500,
    fontWeight: "bold",
  },
});
