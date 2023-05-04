import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const AddWalletButton = ({
    onPress,
    buttonText = "+ Add Wallet",
    backgroundColor = COLORS.secondary,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginHorizontal: SIZES.padding,
        marginTop: SIZES.padding,
        width: "40%",
        borderRadius: SIZES.radius,
        padding: SIZES.base,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        ...FONTS.body3,
        color: COLORS.white,
    },
});

export default AddWalletButton;
