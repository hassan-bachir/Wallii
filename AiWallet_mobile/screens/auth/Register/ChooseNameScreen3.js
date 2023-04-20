import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../../../styles/global";
import { ROUTES } from "../../../constants";

export default function ChooseName({ navigation }) {
    const navogateToChooseEmail = () => {
        navigation.push("ChooseEmail");
    };
    return (
        <View style={globalStyles.container}>
            <Text>Choose Name screen</Text>
            <Button title="Next" onPress={navogateToChooseEmail}></Button>
        </View>
    );
}
