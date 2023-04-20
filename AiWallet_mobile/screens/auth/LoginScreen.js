import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../../styles/global";
import { ROUTES } from "../../constants";

export default function Login({ navigation }) {
    const navigateToWelcome = () => {
        navigation.navigate(ROUTES.WELCOME);
    };

    return (
        <View style={globalStyles.container}>
            <Text>Login Screen</Text>
            <Button title="Get Started" onPress={navigateToWelcome} />
        </View>
    );
}
