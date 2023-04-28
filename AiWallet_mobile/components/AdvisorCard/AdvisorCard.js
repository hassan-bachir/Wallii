import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const scaleFactor = width / 414; // 414 is the reference width (iPhone 11 Pro Max)

const AdvisorCard = ({ advisor, onPress }) => {
    const { name, image } = advisor;
    const imageSource = typeof image === "string" ? { uri: image } : image;

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image} />
            </View>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        width: width * 0.4 * scaleFactor, // Adjust the width based on scaleFactor
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        padding: 10,
    },
    imageContainer: {
        width: 80 * scaleFactor, // Adjust the width based on scaleFactor
        height: 80 * scaleFactor, // Adjust the height based on scaleFactor
        borderRadius: 40 * scaleFactor, // Adjust the borderRadius based on scaleFactor
        overflow: "hidden",
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    name: {
        ...FONTS.body3,
        fontSize: 16 * scaleFactor, // Adjust the fontSize based on scaleFactor
        fontWeight: "bold",
        color: COLORS.white,
        fontFamily: FONTS.body3.fontFamily,
    },
});

export default AdvisorCard;
