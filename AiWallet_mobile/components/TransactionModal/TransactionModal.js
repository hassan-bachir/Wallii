import React, { useState } from "react";
import { TextInput, SafeAreaView } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { ButtonGroup } from "react-native-elements";
import styles from "./TransactionModal.styles";

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

export default TransactionModal;
