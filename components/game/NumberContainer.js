import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Colors from '../../constants/colors';

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

// "screen" includes the status bar. "window" does not.
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.secondary500,
        borderRadius: 8,
        padding: deviceWidth < 380 ? 8 : 16,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        fontFamily: "open-sans-bold",
        fontSize: deviceWidth < 380 ? 28 : 36,
        color: Colors.secondary400,
        fontWeight: "bold",
    }
});