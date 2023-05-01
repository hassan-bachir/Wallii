import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getFinancialSummary } from "../../api/api";
import { ROUTES, FONTS, COLORS, SIZES, IMAGES } from "../../constants";

const FinanceSummaryBanner = () => {
    const [financialSummary, setFinancialSummary] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFinancialSummary();
                setFinancialSummary(data);
            } catch (error) {
                console.error("Error fetching financial summary:", error);
            }
        };
        fetchData();
    }, []);

    if (!financialSummary) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelTextIncome}>Income</Text>
                <Text style={styles.numberText}>
                    ${financialSummary.totalIncome}
                </Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Total</Text>
                <Text style={styles.numberText}>
                    ${financialSummary.difference}
                </Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.labelContainer}>
                <Text style={styles.labelTextExpense}>Expenses</Text>
                <Text style={styles.numberText}>
                    ${financialSummary.totalExpenses}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.base,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding,
        marginHorizontal: SIZES.padding,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
    },
    labelContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SIZES.base,
        width: "33%",
    },
    labelText: {
        ...FONTS.body3,
        fontWeight: "bold",
    },
    labelTextIncome: {
        ...FONTS.body3,
        fontWeight: "bold",
        color: COLORS.primary,
    },
    labelTextExpense: {
        ...FONTS.body3,
        fontWeight: "bold",
        color: COLORS.secondary,
    },

    numberText: {
        ...FONTS.body2,
    },
    separator: {
        justifyContent: "center",
        alignItems: "center",
        width: 1,
        height: "70%",
        backgroundColor: COLORS.black,
    },
});
export default FinanceSummaryBanner;
