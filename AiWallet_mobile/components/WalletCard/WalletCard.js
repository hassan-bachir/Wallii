import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const WalletCard = ({
    walletId,
    name,
    totalIncome,
    totalExpenses,
    onPress,
}) => {
    const totalDifference = totalIncome - totalExpenses;

    const handleOnPress = () => {
        if (onPress) {
            onPress(walletId);
        }
    };
    const numberWithCommas = (x) => {
        if (x === undefined || x === null) {
            return "0";
        }
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
        <TouchableOpacity style={styles.container} onPress={handleOnPress}>
            <View style={styles.topSection}>
                <View style={styles.leftSection}>
                    <Text style={styles.walletName}>{name}</Text>
                    <Text style={styles.totalDifference}>
                        {totalDifference >= 0 ? "Net Profit: " : "Net Loss: "}$
                        {numberWithCommas(Math.abs(totalDifference))}
                    </Text>
                    <View style={styles.amountsContainer}>
                        <Text style={styles.totalIncome}>
                            Income: ${numberWithCommas(totalIncome)}
                        </Text>
                        <Text style={styles.totalExpenses}>
                            Expenses: ${numberWithCommas(totalExpenses)}
                        </Text>
                    </View>
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
        backgroundColor: COLORS.lightGray,
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
    amountsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    totalIncome: {
        ...FONTS.body3,
        color: COLORS.primary,
        marginRight: 15,
    },
    totalExpenses: {
        ...FONTS.body3,
        color: COLORS.secondary,
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
