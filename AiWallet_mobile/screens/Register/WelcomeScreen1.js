import React from "react";
import { StyleSheet, View, text } from "react-native";

export default function Welcome() {
    retrun(
        <View style={StyleSheet.container}>
            <Text>Welcome Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});
