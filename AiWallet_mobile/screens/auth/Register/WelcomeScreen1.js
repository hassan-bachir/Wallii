import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { globalStyles } from "../../../styles/global";
import { ROUTES, FONTS, COLORS } from "../../../constants";
import { Background, Button, Logo, Container } from "../../../components";

export default function Welcome({ navigation }) {
    const navigateToLogin = () => {
        navigation.navigate(ROUTES.LOGIN);
    };

    const navigateToChooseAdvisor = () => {
        navigation.navigate(ROUTES.CHOOSE_ADVISOR);
    };
    return (
        <Background>
            <SafeAreaView style={styles.safeArea}>
                <View style={globalStyles.container}>
                    <View style={styles.logoContainer}>
                        <Logo />
                    </View>
                    <View style={styles.sloganContainer}>
                        <Text style={styles.slogan}>
                            Money Management Made Simple: AI's Revolutionary
                            Approach to Finances! 👋
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button
                            title="GET STARTED"
                            onPress={navigateToChooseAdvisor}
                        />
                        <Text
                            style={styles.loginLink}
                            onPress={navigateToLogin}
                        >
                            Already a user? Login
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </Background>
    );
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    sloganContainer: {
        flex: 1,
        justifyContent: "center",
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 20,
    },
    slogan: {
        ...FONTS.h3,
        color: COLORS.white,
        textAlign: "center",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    loginLink: {
        ...FONTS.body3,
        color: COLORS.white,
        textAlign: "center",
        textDecorationLine: "underline",
        marginTop: 10,
    },
});
