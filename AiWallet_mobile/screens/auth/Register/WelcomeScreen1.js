import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
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
            <Button title="GET STARTED" onPress={navigateToChooseAdvisor} />
            <Button title="lOGIN" onPress={navigateToLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
