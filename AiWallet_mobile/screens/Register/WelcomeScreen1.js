import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <Text>Welcome Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});
