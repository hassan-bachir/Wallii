import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Login() {
    return (
        <View style={StyleSheet.container}>
            <Text>Login Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});
