import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

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
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: "hidden",
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
export default AdvisorCard;
