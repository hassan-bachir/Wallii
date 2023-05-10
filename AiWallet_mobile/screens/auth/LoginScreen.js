import React, { useState } from "react";
import * as Yup from "yup";
import { loginUser } from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAuthToken } from "../../api/api";
import { View, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../store/slices/loginSlice";
import { ROUTES } from "../../constants";
import {
    Background,
    Button,
    Container,
    CustomTextInput,
    Logo,
} from "../../components";
import { loginValidationSchema } from "../../validations/validationSchema";
import styles from "./LoginScreen.styles";

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState("");

    const email = useSelector((state) => state.login.email);
    const password = useSelector((state) => state.login.password);

    const navigateToWelcome = () => {
        navigation.navigate(ROUTES.WELCOME);
    };
    const handleLogin = async () => {
        try {
            await loginValidationSchema.validate(
                {
                    email: email,
                    password: password,
                },
                { abortEarly: false }
            );
            setErrors({});

            try {
                const userData = {
                    email: email,
                    password: password,
                };
                const response = await loginUser(userData);
                const { token } = response;
                await AsyncStorage.setItem("token", token);
                await setAuthToken();
                navigation.navigate(ROUTES.HOME_STACK);
            } catch (error) {
                setApiError("Invalid credentials.");
            }
        } catch (err) {
            console.log("Error caught:", err);
            if (err instanceof Yup.ValidationError) {
                const validationErrors = {};
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });
                setErrors(validationErrors);
            }
        }
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
                            errorMessage={errors.email}
                        />
                        <CustomTextInput
                            label="Password*"
                            placeholder="Enter Password"
                            type="password"
                            onChangeText={(text) => dispatch(setPassword(text))}
                            errorMessage={errors.password}
                        />
                        {apiError ? (
                            <Text style={styles.errorMessage}>{apiError}</Text>
                        ) : null}
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
