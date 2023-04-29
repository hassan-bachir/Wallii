import React, { useState } from "react";
import { View, Text, TextInput as RNTextInput, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const CustomTextInput = ({
    label,
    placeholder,
    onChangeText,
    secureTextEntry = false,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <RNTextInput
                style={[
                    styles.input,
                    {
                        borderBottomColor: isFocused
                            ? COLORS.secondary
                            : COLORS.white,
                        borderBottomWidth: isFocused ? 2 : 1,
                    },
                ]}
                placeholder={placeholder}
                placeholderTextColor={COLORS.white}
                selectionColor={COLORS.white}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.padding * 3,
    },
    label: {
        color: COLORS.lightGreen,
        ...FONTS.body3,
    },
    input: {
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.white,
        ...FONTS.body3,
    },
});

export default CustomTextInput;
