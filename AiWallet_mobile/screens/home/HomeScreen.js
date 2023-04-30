import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Button, Background } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { ROUTES, FONTS, COLORS, SIZES } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Home({ navigation }) {
    const navigateToHomeSettings = () => {
        navigation.navigate(ROUTES.HOME_SETTINGS);
    };

    return (
        <SafeAreaView style={styles.Safe}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Wallets</Text>
                <Ionicons name="ios-settings" size={36} color="black" />
            </View>
            <Text>Home Screen</Text>
            <Button title="settings" onPress={navigateToHomeSettings} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Safe: {
        paddingTop: 20,
    },
    header: {
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerText: {
        ...FONTS.h1,
        color: COLORS.black,
    },
});
