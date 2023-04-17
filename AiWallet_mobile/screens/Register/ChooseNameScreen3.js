import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../../styles/global";

export default function ChooseName({ navigation }) {
    const pressHandler = () => {
        navigation.push("ChooseEmail");
    };
    return (
        <View style={globalStyles.container}>
            <Text>Choose Name screen</Text>
            <Button title="Next" onPress={pressHandler}></Button>
        </View>
    );
}
