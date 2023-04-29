import React from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
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
                        />
                        <CustomTextInput
                            label="Last Name(Optional)"
                            placeholder="Doe"
                            onChangeText={(text) => dispatch(setLastName(text))}
                        />
                        <CustomTextInput
                            label="Email*"
                            placeholder="john@email.com"
                            onChangeText={(text) => dispatch(setEmail(text))}
                        />
                        <CustomTextInput
                            label="Password*"
                            placeholder="Enter Password"
                            type="password"
                            onChangeText={(text) => dispatch(setPassword(text))}
                        />
                    </View>

                    <View style={styles.buttonsContainer}>
                        <Button title="Done" />
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
        justifyContent: "center",
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
