import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

const Button = ({ onPress, title, style }) => {
    return (
        <View style={{ margin: SIZES.padding * 1 }}>
            <TouchableOpacity
                style={{
                    height: 45,
                    backgroundColor: COLORS.secondary,
                    borderRadius: SIZES.radius / 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                    ...style,
                }}
                onPress={onPress}
            >
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
