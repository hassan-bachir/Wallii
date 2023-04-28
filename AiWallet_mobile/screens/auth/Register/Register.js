import React from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Text,
} from "react-native";

import { ROUTES, FONTS, COLORS } from "../../../constants";
import { Background, Button } from "../../../components";

export default function Register({ navigation }) {
    const navigateBackToChooseAdvisor = () => {
        navigation.goBack();
    };
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.buttonsContainer}>
                    <Button title="Done" />
                    <TouchableOpacity onPress={navigateBackToChooseAdvisor}>
                        <Text style={styles.goBackLink}>
                            Back to Advisor Screen
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Background>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
