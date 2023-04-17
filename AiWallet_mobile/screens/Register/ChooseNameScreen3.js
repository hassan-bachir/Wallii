import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";

export default function ChooseName({ navigation }) {
    const pressHandler = () => {
        navigation.push("ChooseEmail");
    };
    return (
        <View style={globalStyles.container}>
            <Text>Choose Name screen</Text>
        </View>
    );
}
