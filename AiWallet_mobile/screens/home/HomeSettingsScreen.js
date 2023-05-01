import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ROUTES, FONTS, COLORS, SIZES } from "../../constants";
import { Button } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeSettings({ navigation }) {
    const handleSignOut = async () => {
        try {
            await AsyncStorage.removeItem("token");
            navigation.reset({
                index: 0,
                routes: [{ name: ROUTES.AUTH }],
            });
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    };
    return (
        <View>
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );
}
