import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { ROUTES } from "../../constants";

export default function Home({ navigation }) {
    const navigateToHome = () => {
        navigation.navigate(ROUTES.HOME_SETTINGS);
    };

    return (
        <View>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title="settings" onPress={navigateToHome} />
        </View>
    );
}
