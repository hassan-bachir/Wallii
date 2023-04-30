import React, { useState } from "react";
import * as Yup from "yup";
import { registerUser } from "../../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { registerValidationSchema } from "../../../validations/validationSchema";
import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
} from "../../../store/slices/registrationSlice";
import { ROUTES, FONTS, COLORS, SIZES } from "../../../constants";
import {
    Background,
    Button,
    Container,
    CustomTextInput,
    Logo,
} from "../../../components";

export default function Register({ navigation }) {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.registration.name);
    const lastName = useSelector((state) => state.registration.lastName);
    const email = useSelector((state) => state.registration.email);
    const password = useSelector((state) => state.registration.password);
    const aiAdvisorName = useSelector(
        (state) => state.registration.aiAdvisorName
    );

    const [errors, setErrors] = useState({});

    const validateForm = async () => {
        try {
            await registerValidationSchema.validate(
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                },
                { abortEarly: false }
            );

            setErrors({});
            try {
                const userData = {
                    name: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    aiAdvisorName: aiAdvisorName,
                };
                const response = await registerUser(userData);
                const { token } = response;
                await AsyncStorage.setItem("@auth_token", token);

                navigation.navigate(ROUTES.HOME_STACK);
            } catch (error) {
                console.error("Error registering user:", error);
                // Handle error, e.g., show a message to the user
            }
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const validationErrors = {};
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });
                setErrors(validationErrors);
            }
        }
    };
    const navigateBackToChooseAdvisor = () => {
        navigation.goBack();
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
                            label="First Name*"
                            placeholder="John"
                            onChangeText={(text) =>
                                dispatch(setFirstName(text))
                            }
                            errorMessage={errors.firstName}
                        />
                        <CustomTextInput
                            label="Last Name(Optional)"
                            placeholder="Doe"
                            onChangeText={(text) => dispatch(setLastName(text))}
                            errorMessage={errors.lastName}
                        />
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
                    </View>

                    <View style={styles.buttonsContainer}>
                        <Button title="Done" onPress={validateForm} />
                        <TouchableOpacity onPress={navigateBackToChooseAdvisor}>
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
    inputsGroup: {
        marginBottom: SIZES.padding * 2,
        marginTop: SIZES.padding * 2,
    },
});
