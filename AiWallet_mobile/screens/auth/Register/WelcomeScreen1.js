import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
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
        <ImageBackground
            source={require("../../../assets/images/background2.png")}
            style={styles.background}
        >
            <View style={globalStyles.container}>
                <Text>Welcome Screen</Text>
                <Button title="GET STARTED" onPress={navigateToChooseAdvisor} />
                <Button title="lOGIN" onPress={navigateToLogin} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        width: "100%",
        height: "100%",
    },
});
