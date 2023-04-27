import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Text,
} from "react-native";
import { globalStyles } from "../../../styles/global";
import { ROUTES, FONTS, COLORS, images } from "../../../constants";
import { Background, Button } from "../../../components";
import { useDispatch } from "react-redux";
import { setSelectedAdvisor } from "../../../store/slices/registrationSlice";

const advisors = [
    { id: 1, name: "Advisor 1", image: "https://example.com/advisor1.jpg" },
    { id: 2, name: "Advisor 2", image: "https://example.com/advisor2.jpg" },
];

export default function ChooseAdvisor({ navigation }) {
    const dispatch = useDispatch();

    const navigateToChooseName = () => {
        navigation.push(ROUTES.CHOOSE_NAME);
    };

    const navigateBackToWelcome = () => {
        navigation.goBack();
    };

    return (
        <Background>
            <SafeAreaView style={globalStyles.container}>
                <View style={styles.buttonsContainer}>
                    <Button title="Next" onPress={navigateToChooseName} />
                    <TouchableOpacity onPress={navigateBackToWelcome}>
                        <Text style={styles.goBackLink}>Back to Welcome</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Background>
    );
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1,
        justifyContent: "center",
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
