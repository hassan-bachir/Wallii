import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { ButtonGroup } from "react-native-elements";
import { IMAGES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Background } from "../../components";

const TransactionScreen = ({ route, navigation }) => {
    const { mode, transactionId } = route.params;
    const [transactionTypeIndex, setTransactionTypeIndex] = useState(0);
    const [amount, setAmount] = useState("");

    const transactionTypes = ["Expense", "Income"];

    useEffect(() => {
        if (mode === "update") {
            // Fetch transaction details using an API and update the state
            // For example:
            // fetchTransactionDetails(transactionId).then((transaction) => {
            //   setTransactionTypeIndex(transaction.type === 'Expense' ? 0 : 1);
            //   setAmount(transaction.amount);
            // });
        }
    }, [mode, transactionId]);

    const updateTransactionType = (selectedIndex) => {
        setTransactionTypeIndex(selectedIndex);
    };

    const handleSubmit = () => {
        if (mode === "create") {
            // Call API to create a new transaction
        } else if (mode === "update") {
            // Call API to update the existing transaction
        }
    };

    return (
        <Background image={IMAGES.INCOME_BACKGROUND}>
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
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.submitButton}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    backIcon: {
        margin: 10,
    },
    amountInput: {
        // Add styles for the amount input field
    },
    submitButton: {
        // Add styles for the submit button
    },
    submitButtonText: {
        // Add styles for the submit button text
    },
});

export default TransactionScreen;
