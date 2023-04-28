import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";

import { ROUTES } from "../../../constants";
import { Background, Button } from "../../../components";

export default function Register({ navigation }) {
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Button title="Done"></Button>
            </SafeAreaView>
        </Background>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
