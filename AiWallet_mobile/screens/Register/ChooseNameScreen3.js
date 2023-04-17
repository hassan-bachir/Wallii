import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ChooseName() {
    return (
        <View style={styles.container}>
            <Text>Choose Name screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});
