import React from "react";
import { View, Text } from "react-native";
import styles from "./FinanceSummaryBanner.styles";

const FinanceSummaryBanner = ({ financialSummary }) => {
    if (!financialSummary) {
        return null;
    }
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelTextIncome}>Income</Text>
                <Text style={styles.numberText}>
                    ${numberWithCommas(financialSummary.totalIncome)}
                </Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Total</Text>
                <Text style={styles.numberText}>
                    ${numberWithCommas(financialSummary.difference)}
                </Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.labelContainer}>
                <Text style={styles.labelTextExpense}>Expenses</Text>
                <Text style={styles.numberText}>
                    ${numberWithCommas(financialSummary.totalExpenses)}
                </Text>
            </View>
        </View>
    );
};

export default FinanceSummaryBanner;
