import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./WalletCard.styles";

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

export default WalletCard;
