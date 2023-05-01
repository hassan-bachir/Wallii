import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getFinancialSummary } from "../../api/api";

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
                <Text style={styles.labelText}>Income</Text>
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
                <Text style={styles.labelText}>Expenses</Text>
                <Text style={styles.numberText}>
                    ${financialSummary.totalExpenses}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "white",
        backgroundColor: "white",
    },
    labelContainer: {
        alignItems: "center",
        paddingVertical: 10,
    },
    labelText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    numberText: {
        fontSize: 20,
    },
    separator: {
        width: 1,
        height: "70%",
        backgroundColor: "white",
    },
});
export default FinanceSummaryBanner;
