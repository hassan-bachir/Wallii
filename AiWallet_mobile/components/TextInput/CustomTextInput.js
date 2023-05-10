import React, { useState } from "react";
import {
    View,
    Text,
    TextInput as RNTextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import { COLORS, ICONS } from "../../constants";
import styles from "./CustomTextInput.styles";

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

export default CustomTextInput;
