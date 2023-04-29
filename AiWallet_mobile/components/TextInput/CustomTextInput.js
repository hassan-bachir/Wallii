import React, { useState } from "react";
import {
    View,
    Text,
    TextInput as RNTextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import { COLORS, FONTS, SIZES, ICONS } from "../../constants";

const CustomTextInput = ({
    label,
    placeholder,
    onChangeText,
    secureTextEntry = false,
    type,
    errorMessage,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const [showPassword, setShowPassword] = useState(secureTextEntry);

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
                placeholderTextColor={COLORS.gray}
                selectionColor={COLORS.white}
                onChangeText={onChangeText}
                secureTextEntry={
                    type === "password" ? !showPassword : secureTextEntry
                }
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {type === "password" && (
                <TouchableOpacity
                    style={styles.eyeIconContainer}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Image
                        source={showPassword ? ICONS.disable_eye : ICONS.eye}
                        style={styles.eyeIcon}
                    />
                </TouchableOpacity>
            )}
            {errorMessage && (
                <Text style={styles.errorText}>{errorMessage}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.padding,
    },
    label: {
        color: COLORS.white,
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
    eyeIconContainer: {
        position: "absolute",
        right: 0,
        bottom: 10,
        height: 30,
        width: 30,
    },
    eyeIcon: {
        height: 20,
        width: 20,
        tintColor: COLORS.white,
    },
    errorText: {
        color: COLORS.red,
        ...FONTS.body4,
        marginTop: SIZES.base,
    },
});

export default CustomTextInput;
