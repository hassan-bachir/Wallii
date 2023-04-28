import React, { useRef, useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const scaleFactor = width / 414; // (iPhone 11 Pro Max)

const AdvisorCard = ({ advisor, onPress, isSelected }) => {
    const { name, image } = advisor;
    const imageSource = typeof image === "string" ? { uri: image } : image;

    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: isSelected ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isSelected]);

    const backgroundColor = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [COLORS.primary, COLORS.secondary],
    });

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={[styles.card, { backgroundColor }]}>
                <View style={styles.imageContainer}>
                    <Image source={imageSource} style={styles.image} />
                </View>
                <Text style={styles.name}>{name}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        width: width * 0.4 * scaleFactor,
        borderRadius: 10,
        padding: 10,
    },
    imageContainer: {
        width: 80 * scaleFactor,
        height: 80 * scaleFactor,
        borderRadius: 40 * scaleFactor,
        overflow: "hidden",
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    name: {
        ...FONTS.body3,
        fontSize: 16 * scaleFactor,
        fontWeight: "bold",
        color: COLORS.white,
        fontFamily: FONTS.body3.fontFamily,
    },
});

export default AdvisorCard;
