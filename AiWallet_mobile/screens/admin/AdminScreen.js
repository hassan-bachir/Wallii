import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { COLORS, ROUTES } from "../../constants";

const Admin = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ADMIN SCREEN</Text>
            <Text>This is a basic React Native screen.</Text>
            <Button
                title="user"
                onPress={() => navigation.navigate(ROUTES.USER_SCREEN)}
            >
                user
            </Button>
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
