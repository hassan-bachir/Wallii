import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from "react-native";
import { Background, Container } from "../../components";
import { COLORS, IMAGES } from "../../constants";
import {
    getTransactionById,
    updateTransaction,
    deleteTransaction,
} from "../../api/api";
import styles from "./UpdateExpenseScreen.styles";

import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";

const UpdateIncome = ({ navigation }) => {
    const transactionId = useSelector(
        (state) => state.wallet.currentTransactionId
    );

    const [transaction, setTransaction] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isValidAmount, setIsValidAmount] = useState(false);
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [description, setDescription] = useState("");

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleDateChange = (selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate.toISOString().split("T")[0]);
    };

    const handleAmountChange = (text) => {
        const unformattedAmount = text.replace(/,/g, "");
        if (!isNaN(parseFloat(unformattedAmount)) || unformattedAmount === "") {
            const formattedAmount = formatNumberWithCommas(unformattedAmount);
            setAmount(formattedAmount);
        }
    };

    const handleDatePress = () => {
        setShowDatePicker(true);
    };

    const handleSubmit = async () => {
        try {
            const transactionData = {
                type: "expense",
                category,
                amount: parseFloat(amount.replace(/,/g, "")),
                date,
                description,
            };

            await updateTransaction(transactionId, transactionData);
            navigation.goBack();
        } catch (error) {
            console.error("Error updating income:", error);
        }
    };

    const handleDelete = () => {
        Alert.alert(
            "Delete Income",
            "Are you sure you want to delete this income?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: async () => {
                        try {
                            await deleteTransaction(transactionId);
                            navigation.goBack();
                        } catch (error) {
                            console.error("Error deleting transaction:", error);
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    useEffect(() => {
        if (transaction) {
            setCategory(transaction.category);
            setAmount(transaction.amount.toString());
            setDate(transaction.date.split("T")[0]);
            setDescription(transaction.description);
        }
    }, [transaction]);

    useEffect(() => {
        const amountIsValid = amount && !isNaN(parseFloat(amount));
        setIsValidAmount(amountIsValid);
    }, [amount]);

    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                const fetchedTransaction = await getTransactionById(
                    transactionId
                );
                setTransaction(fetchedTransaction);
            } catch (error) {
                console.error("Error fetching transaction:", error);
            }
        };

        fetchTransaction();
    }, [transactionId]);

    return (
        <Background image={IMAGES.EXPENSE_BACKGROUND}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.Container}>
                    <View style={styles.greenSection}>
                        <View style={styles.header}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                            >
                                <Icon
                                    name="chevron-back"
                                    size={30}
                                    color={COLORS.white}
                                />
                            </TouchableOpacity>
                            <Text style={styles.title}>Update Expense</Text>
                        </View>
                        <Text style={styles.Amountlabel}>Amount:</Text>
                        <TextInput
                            style={styles.amountinput}
                            onChangeText={handleAmountChange}
                            value={amount}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.whiteSection}>
                        <Container>
                            <Picker
                                style={styles.picker}
                                selectedValue={category}
                                onValueChange={(itemValue) =>
                                    setCategory(itemValue)
                                }
                            >
                                <Picker.Item
                                    label="Select a category"
                                    value="other"
                                />
                                <Picker.Item
                                    label="Food & Dining"
                                    value="Food & Dining"
                                />
                                <Picker.Item
                                    label="Transportation"
                                    value="Transportation"
                                />
                                <Picker.Item
                                    label="Shopping"
                                    value="Shopping"
                                />
                                <Picker.Item
                                    label="Utilities"
                                    value="Utilities"
                                />
                                <Picker.Item
                                    label="Entertainment"
                                    value="Entertainment"
                                />
                                <Picker.Item
                                    label="Healthcare"
                                    value="Healthcare"
                                />
                                <Picker.Item label="Travel" value="Travel" />
                                <Picker.Item label="Housing" value="Housing" />
                                <Picker.Item label="Other" value="Other" />
                            </Picker>

                            <Text style={styles.labelBlack}>Date:</Text>
                            <TouchableOpacity onPress={handleDatePress}>
                                <TextInput
                                    style={styles.inputBlack}
                                    value={date}
                                    editable={false}
                                />
                            </TouchableOpacity>
                            {showDatePicker && (
                                <DateTimePicker
                                    value={new Date(date)}
                                    mode="date"
                                    display="default"
                                    onChange={handleDateChange}
                                />
                            )}

                            <Text style={styles.labelBlack}>Description:</Text>
                            <TextInput
                                style={styles.descriptionInput}
                                onChangeText={setDescription}
                                value={description}
                                multiline={true}
                            />

                            <TouchableOpacity
                                style={[
                                    styles.submitButton,
                                    !isValidAmount && styles.disabledButton,
                                ]}
                                onPress={handleSubmit}
                                disabled={!isValidAmount}
                            >
                                <Text style={styles.submitButtonText}>
                                    Update Expense
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.deleteButton]}
                                onPress={handleDelete}
                            >
                                <Text style={styles.deleteButtonText}>
                                    Delete Transaction
                                </Text>
                            </TouchableOpacity>
                        </Container>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </Background>
    );
};

export default UpdateIncome;
