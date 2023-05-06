import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Background } from "../../components";
import { COLORS, SIZES, IMAGES, FONTS } from "../../constants";

export default function AiAdvisor() {
    return (
        <Background image={IMAGES.SECONDARY_BACKGROUND}>
            <View style={styles.container}>
                <Text style={styles.title}>Hello, World!</Text>
                <Text style={styles.subtitle}>
                    This is a simple screen component
                </Text>
                <View style={styles.content}>
                    <Text style={styles.text}>
                        You can put any content you want here!
                    </Text>
                </View>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

        padding: SIZES.padding,
    },
    title: {
        ...FONTS.h1,
        color: COLORS.white,
    },
    subtitle: {
        fontSize: SIZES.h3,
        color: COLORS.secondary,
        marginBottom: SIZES.padding,
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: SIZES.radius,
        padding: SIZES.padding * 2,
    },
    text: {
        fontSize: SIZES.body3,
        color: COLORS.black,
        textAlign: "center",
    },
});
