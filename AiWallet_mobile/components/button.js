import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

const Button = ({ onPress, title, style }) => {
    return (
        <View style={{ margin: SIZES.padding * 3 }}>
            <TouchableOpacity
                style={{
                    height: 60,
                    backgroundColor: COLORS.black,
                    borderRadius: SIZES.radius / 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                    ...style,
                }}
                onPress={onPress}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
