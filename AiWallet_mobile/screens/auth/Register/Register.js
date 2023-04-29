import React from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
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
                    <View style={styles.nameInputContainer}>
                        <CustomTextInput
                            label="First Name"
                            placeholder="Enter First Name"
                            onChangeText={(text) =>
                                console.log("First Name:", text)
                            }
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
    nameInputContainer: {
        marginTop: SIZES.padding * 3,
    },
    nameInputLabel: {
        color: COLORS.lightGreen,
        ...FONTS.body3,
    },
    nameInput: {
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.white,
        ...FONTS.body3,
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
