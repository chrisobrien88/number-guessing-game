import { Text, StyleSheet, Platform } from 'react-native';

import Colors from '../../constants/colors';

const Title = ({ children }) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
    }

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        color: "white",
        textAlign: "center",
        // padding: Platform.OS === "android" ? 12 : 22,
        padding: 12,
        backgroundColor: Colors.secondary500,
        // borderRadius: Platform.select({ ios: 22, android: 12 }),
        borderRadius: 12,
        maxWidth: "80%",
        width: 300,
    }
});