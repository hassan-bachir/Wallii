import React from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
} from "react-native";

import { ROUTES, FONTS, COLORS, SIZES } from "../../../constants";
import {
    Background,
    Button,
    Container,
    CustomTextInput,
} from "../../../components";

export default function Register({ navigation }) {
    const navigateBackToChooseAdvisor = () => {
        navigation.goBack();
    };
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Container>
                    <View style={styles.formContainer}>
                        <CustomTextInput
                            label="First Name*"
                            placeholder="John"
                            // onChangeText={(text) =>
                            //     console.log("First Name:", text)
                            // }
                        />
                        <CustomTextInput
                            label="Last Name"
                            placeholder="John"
                            // onChangeText={(text) =>
                            //     console.log("First Name:", text)
                            // }
                        />
                        <CustomTextInput
                            label="Email*"
                            placeholder="example@example.com"
                            keyboardType="email-address"
                            // onChangeText={(text) => console.log("Email:", text)}
                        />
                        <CustomTextInput
                            label="Password*"
                            placeholder="Enter Password"
                            secureTextEntry
                            // onChangeText={(text) => console.log("Password:", text)}
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
    },
    formContainer: {
        marginBottom: 20,
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
