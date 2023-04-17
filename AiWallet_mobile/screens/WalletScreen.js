import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Wallet() {
    return (
        <View style={styles.container}>
            <Text>Wallet screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});
