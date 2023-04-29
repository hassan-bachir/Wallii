import React from "react";
import { View, Text, TextInput as RNTextInput, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const CustomTextInput = ({
    label,
    placeholder,
    onChangeText,
    secureTextEntry = false,
    ...otherProps
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <RNTextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={COLORS.white}
                selectionColor={COLORS.white}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                {...otherProps}
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
