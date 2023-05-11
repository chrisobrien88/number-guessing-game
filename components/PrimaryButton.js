import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log("PrimaryButton pressed");
  };

  return (
    <View style={styles.buttonOuterContainer}>
      {
        // style prop for the pressable component takes an object OR takes a function which is called automatically whenever the pressable component is pressed.
        // The style object receives some data about press event which is an object with one property called pressed. So we can use object destructuring to extract that property
        // and then use it to conditionally apply styles to the buttonInnerContainer.
        // pressed is a boolean value which is true when the button is pressed and false when it is not pressed.
      }
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#173856" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    width: 120,
  },
  buttonInnerContainer: {
    backgroundColor: "#27063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
