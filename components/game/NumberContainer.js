import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.secondary500,
        borderRadius: 8,
        padding: 12,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        fontFamily: "open-sans-bold",
        fontSize: 36,
        color: Colors.secondary400,
        fontWeight: "bold",
    }
});