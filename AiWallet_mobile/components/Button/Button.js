import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

const Button = ({
    onPress,
    title,
    style,
    disabled = false,
    backgroundColor = COLORS.secondary,
}) => {
    const buttonBackgroundColor = disabled ? COLORS.gray : backgroundColor;
    return (
        <View style={{ margin: SIZES.padding * 1 }}>
            <TouchableOpacity
                style={{
                    height: 45,
                    backgroundColor: buttonBackgroundColor,
                    borderRadius: SIZES.radius / 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                    ...style,
                }}
                onPress={disabled ? null : onPress}
                disabled={disabled}
            >
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
