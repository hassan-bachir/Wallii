import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const TransactionScreen = ({ route, navigation }) => {
    const { transaction } = route.params;
    const [transactionTypeIndex, setTransactionTypeIndex] = useState(0);
    const [amount, setAmount] = useState("");

    const transactionTypes = ["Expense", "Income"];

    const updateTransactionType = (selectedIndex) => {
        setTransactionTypeIndex(selectedIndex);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Ionicons
                name="arrow-back"
                size={24}
                onPress={() => navigation.goBack()}
                style={styles.backIcon}
            />
            <ButtonGroup
                onPress={updateTransactionType}
                selectedIndex={transactionTypeIndex}
                buttons={transactionTypes}
            />
            <TextInput
                style={styles.amountInput}
                keyboardType="numeric"
                onChangeText={setAmount}
                value={amount}
                placeholder="Amount"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backIcon: {
        margin: 10,
    },
    amountInput: {},
});

export default TransactionScreen;
