import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function HomeSettings() {
    return (
        <View style={styles.container}>
            <Text>Home Screen Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});
