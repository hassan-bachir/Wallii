import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Button.styles";
import { COLORS } from "../../constants";
const Button = ({
    onPress,
    title,
    style,
    disabled = false,
    backgroundColor = COLORS.secondary,
}) => {
    const buttonBackgroundColor = disabled ? COLORS.gray : backgroundColor;

    return (
        <View style={styles.margin}>
            <TouchableOpacity
                style={[
                    styles.buttonStyle,
                    { backgroundColor: buttonBackgroundColor },
                    style,
                ]}
                onPress={disabled ? null : onPress}
                disabled={disabled}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
