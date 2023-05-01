import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const WalletCard = ({ name, totalIncome, totalExpenses, onPress }) => {
    const totalDifference = totalIncome - totalExpenses;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.topSection}>
                <View style={styles.leftSection}>
                    <Text style={styles.walletName}>{name}</Text>
                    <Text style={styles.totalDifference}>
                        {totalDifference >= 0 ? "Net Profit: " : "Net Loss: "}$
                        {Math.abs(totalDifference)}
                    </Text>
                    <Text style={styles.totalIncome}>
                        Income: ${totalIncome}
                    </Text>
                    <Text style={styles.totalExpenses}>
                        Expenses: ${totalExpenses}
                    </Text>
                </View>
                <View style={styles.rightSection}>
                    <View style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
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
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        position: "relative",
    },
    topSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftSection: {
        paddingLeft: SIZES.padding,
    },
    walletName: {
        ...FONTS.h3,
        marginBottom: SIZES.base,
    },
    totalDifference: {
        ...FONTS.body3,
        color: COLORS.black,
        marginBottom: SIZES.base,
    },
    totalIncome: {
        ...FONTS.body3,
        color: COLORS.primary,
        marginBottom: SIZES.base / 2,
    },
    totalExpenses: {
        ...FONTS.body3,
        color: COLORS.secondary,
        marginBottom: SIZES.base / 2,
    },
    rightSection: {
        alignItems: "flex-end",
    },
    addButton: {
        backgroundColor: COLORS.secondary,
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: -25,
        right: SIZES.padding,
    },
    addButtonText: {
        ...FONTS.h1,
        color: COLORS.white,
    },
});

export default WalletCard;
