import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Welcome() {
    return (
        <View style={globalStyles.container}>
            <Text>Welcome Screen</Text>
        </View>
    );
}
