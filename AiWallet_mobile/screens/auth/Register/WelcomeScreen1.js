import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import { ROUTES } from "../../../constants";
import { Background, Button, Logo } from "../../../components";

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
                <Logo />
                <Button title="GET STARTED" onPress={navigateToChooseAdvisor} />
                <Button title="LOGIN" onPress={navigateToLogin} />
            </View>
        </Background>
    );
}
