import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Button, Background } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { ROUTES, FONTS, COLORS, SIZES, IMAGES } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Home({ navigation }) {
    const navigateToHomeSettings = () => {
        navigation.navigate(ROUTES.HOME_SETTINGS);
    };

    return (
        <Background image={IMAGES.HOMEBACKGROUND}>
            <SafeAreaView style={styles.Safe}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Wallets</Text>
                    <Ionicons
                        name="ios-settings"
                        size={32}
                        color="white"
                        onPress={navigateToHomeSettings}
                    />
                </View>
            </SafeAreaView>
        </Background>
    );
}

const styles = StyleSheet.create({
    Safe: {
        paddingTop: 20,
    },
    header: {
        marginTop: 20,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerText: {
        ...FONTS.h1,
        color: COLORS.white,
    },
});
