import React, { useRef, useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Animated,
} from "react-native";
import { COLORS } from "../../constants";
import styles from "./AdvisorCard.styles";

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

export default AdvisorCard;
