import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import { ROUTES, FONTS, COLORS } from "../../../constants";
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
                <Text style={styles.slogan}>
                    Money Management Made Simple: AI's Revolutionary Approach to
                    Finances!
                </Text>
                <Button title="GET STARTED" onPress={navigateToChooseAdvisor} />
                <Button title="LOGIN" onPress={navigateToLogin} />
            </View>
        </Background>
    );
}
const styles = StyleSheet.create({
    slogan: {
        ...FONTS.h3,
        color: COLORS.white,
        textAlign: "center",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
});
