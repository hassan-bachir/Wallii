import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const AddWalletButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>+ Add Wallet</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: SIZES.base,
        width: "40%",
        backgroundColor: COLORS.secondary,
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
