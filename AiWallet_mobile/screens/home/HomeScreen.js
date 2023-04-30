import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Button, Container } from "../../components";
import { ROUTES } from "../../constants";

export default function Home({ navigation }) {
    const navigateToHomeSettings = () => {
        navigation.navigate(ROUTES.HOME_SETTINGS);
    };

    return (
        <SafeAreaView style={styles.Safe}>
            <View style={styles.header}>
                <Text>Wallet</Text>
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
