import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { ROUTES } from "../../../constants";
import { Background, Button, Logo, Container } from "../../../components";
import styles from "./WelcomeScreen1.styles";

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
                <Container>
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
                </Container>
            </SafeAreaView>
        </Background>
    );
}
