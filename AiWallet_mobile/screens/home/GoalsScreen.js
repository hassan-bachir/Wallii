import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { Background } from "../../components";
import { ROUTES, FONTS, COLORS, SIZES, IMAGES } from "../../constants";
import { getGoals } from "../../api/api";
const Goals = () => {
    return (
        <Background image={IMAGES.HOMEBACKGROUND}>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.text}>This is a test screen</Text>
                </View>
            </SafeAreaView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Goals;
