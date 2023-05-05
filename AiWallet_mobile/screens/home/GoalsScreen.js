import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Goals = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is a test screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Goals;
