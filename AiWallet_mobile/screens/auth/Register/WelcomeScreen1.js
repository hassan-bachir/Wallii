import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../../../styles/global";
import { ROUTES } from "../../../constants";

export default function Welcome({ navigation }) {
    const navigateToLogin = () => {
        navigation.navigate(ROUTES.LOGIN);
    };

    const navigateToChooseAdvisor = () => {
        navigation.navigate(ROUTES.CHOOSE_ADVISOR);
    };
    return (
        <View style={globalStyles.container}>
            <Text>Welcome Screen</Text>
            <Button title="Next" onPress={pressHandler}></Button>
        </View>
    );
}
