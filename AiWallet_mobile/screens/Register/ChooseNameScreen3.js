import React from "react";
import { StyleSheet, View, text } from "react-native";

export default function Home() {
    retrun(
        <View style={StyleSheet.container}>
            <Text>Choose Name screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});
