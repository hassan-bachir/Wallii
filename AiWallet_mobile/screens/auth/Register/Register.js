import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../../../styles/global";
import { ROUTES } from "../../../constants";

export default function Register({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>Register</Text>
            <Button title="Next"></Button>
        </View>
    );
}
