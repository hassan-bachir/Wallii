import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../constants";
import styles from "./AddWalletButton.styles";

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

export default AddWalletButton;
