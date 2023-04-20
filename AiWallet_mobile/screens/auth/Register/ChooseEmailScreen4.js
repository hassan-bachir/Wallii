import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../../../styles/global";

export default function ChooseEmail() {
    return (
        <View style={globalStyles.container}>
            <Text>Choose Email Screen </Text>
            <Button title="Done" />
        </View>
    );
}
