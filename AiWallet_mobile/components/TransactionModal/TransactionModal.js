import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
// import { ButtonGroup } from "react-native-elements";

const TransactionModal = ({ isVisible, onClose }) => {
    const [transactionTypeIndex, setTransactionTypeIndex] = useState(0);
    const [amount, setAmount] = useState("");

    const transactionTypes = ["Expense", "Income"];

    const updateTransactionType = (selectedIndex) => {
        setTransactionTypeIndex(selectedIndex);
    };

    return (
        <Modal isVisible={isVisible}>
            <View style={styles.modalContainer}>
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
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({});

export default TransactionModal;
