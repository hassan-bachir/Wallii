import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Button, Container } from "../../components";
import { ROUTES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
export default function Home({ navigation }) {
    const navigateToHomeSettings = () => {
        navigation.navigate(ROUTES.HOME_SETTINGS);
    };

    return (
        <SafeAreaView style={styles.Safe}>
            <View style={styles.header}>
                <Text>Wallet</Text>
                <Ionicons name="ios-settings" size={24} color="black" />
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
});
