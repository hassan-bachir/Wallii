import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import { ROUTES } from "../../../constants";
import { Background, Button } from "../../../components"; // Import Background and Button components

export default function Welcome({ navigation }) {
    const navigateToLogin = () => {
        navigation.navigate(ROUTES.LOGIN);
    };

    const navigateToChooseAdvisor = () => {
        navigation.navigate(ROUTES.CHOOSE_ADVISOR);
    };
    return (
        <Background>
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>Welcome Screen</Text>
                <Button title="GET STARTED" onPress={navigateToChooseAdvisor} />
                <Button title="LOGIN" onPress={navigateToLogin} />
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
