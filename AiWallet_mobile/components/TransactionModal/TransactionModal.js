import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { ButtonGroup } from "react-native-elements";

const TransactionModal = ({ isVisible, onClose }) => {
    const [transactionTypeIndex, setTransactionTypeIndex] = useState(0);
    const [amount, setAmount] = useState("");

    const transactionTypes = ["Expense", "Income"];

    const updateTransactionType = (selectedIndex) => {
        setTransactionTypeIndex(selectedIndex);
    };

    return (
        <Modal isVisible={isVisible}>
            <SafeAreaView style={styles.modalContainer}>
                <Ionicons
                    name="close"
                    size={24}
                    onPress={onClose}
                    style={styles.closeIcon}
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
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    closeIcon: {
        alignSelf: "flex-end",
        marginRight: 10,
        marginTop: 10,
    },
    amountInput: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        paddingLeft: 10,
        margin: 20,
        height: 40,
    },
});

export default TransactionModal;
