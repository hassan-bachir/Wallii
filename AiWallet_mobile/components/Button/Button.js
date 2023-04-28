import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

const Button = ({ onPress, title, style, disabled = false }) => {
    const backgroundColor = disabled ? COLORS.gray : COLORS.secondary;
    return (
        <View style={{ margin: SIZES.padding * 1 }}>
            <TouchableOpacity
                style={{
                    height: 45,
                    backgroundColor: backgroundColor,
                    borderRadius: SIZES.radius / 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                    ...style,
                }}
                onPress={disabled ? null : onPress} // Disable onPress action when disabled
                disabled={disabled} // Add the disabled prop to TouchableOpacity
            >
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
