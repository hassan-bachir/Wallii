import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Admin = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>USER SCREEN</Text>
            <Text>This is a basic React Native screen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});

export default Admin;
