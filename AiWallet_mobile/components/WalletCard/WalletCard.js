import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const WalletCard = ({ name, totalIncome, totalExpenses }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.walletName}>{name}</Text>
            <Text style={styles.totalIncome}>Income: ${totalIncome}</Text>
            <Text style={styles.totalExpenses}>Expenses: ${totalExpenses}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        marginBottom: SIZES.base,
        width: "100%",
    },
    walletName: {
        ...FONTS.h3,
        marginBottom: SIZES.base,
    },
    totalIncome: {
        ...FONTS.body4,
        color: COLORS.primary,
        marginBottom: SIZES.base / 2,
    },
    totalExpenses: {
        ...FONTS.body4,
        color: COLORS.secondary,
    },
});

export default WalletCard;
