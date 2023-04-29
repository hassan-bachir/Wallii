import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../store/slices/loginSlice";

import { ROUTES, FONTS, COLORS, SIZES } from "../../constants";
import {
    Background,
    Button,
    Container,
    CustomTextInput,
    Logo,
} from "../../components";
import { loginValidationSchema } from "../../validations/validationSchema";

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    const email = useSelector((state) => state.login.email);
    const password = useSelector((state) => state.login.password);

    const navigateToWelcome = () => {
        navigation.navigate(ROUTES.WELCOME);
    };
    const handleLogin = () => {
        console.log("Email:", email);
        console.log("Password:", password);

        // Add your login logic here (e.g., validation, API calls, etc.)
    };

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Container style={styles.centeredContainer}>
                    <View>
                        <Logo />
                    </View>
                    <View style={styles.inputsGroup}>
                        <CustomTextInput
                            label="Email*"
                            placeholder="john@email.com"
                            onChangeText={(text) => dispatch(setEmail(text))}
                            // errorMessage={errors.email}
                        />
                        <CustomTextInput
                            label="Password*"
                            placeholder="Enter Password"
                            type="password"
                            onChangeText={(text) => dispatch(setPassword(text))}
                            // errorMessage={errors.password}
                        />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button title="Login" onPress={handleLogin} />
                        <TouchableOpacity onPress={navigateToWelcome}>
                            <Text style={styles.goBackLink}>
                                Back to Welcome
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
    inputsGroup: {
        marginBottom: SIZES.padding * 2,
        marginTop: SIZES.padding * 2,
    },
});
