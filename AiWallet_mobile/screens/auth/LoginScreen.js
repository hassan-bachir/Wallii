import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES, FONTS, COLORS, SIZES } from "../../constants";
import {
    Background,
    Button,
    Container,
    CustomTextInput,
    Logo,
} from "../../components";

export default function Login({ navigation }) {
    const navigateToWelcome = () => {
        navigation.navigate(ROUTES.WELCOME);
    };

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Container style={styles.centeredContainer}>
                    <View>
                        <Logo />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button title="Login" />
                        <TouchableOpacity onPress={navigateToWelcome}>
                            <Text style={styles.goBackLink}>
                                Back to Advisor Screen
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Container>
            </SafeAreaView>
        </Background>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centeredContainer: {
        justifyContent: "center",
    },

    buttonsContainer: {
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    goBackLink: {
        ...FONTS.body3,
        color: COLORS.white,
        textAlign: "center",
        textDecorationLine: "underline",
        marginTop: 10,
    },
});
