import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { Background, Container } from "../../components";
import { COLORS, IMAGES, ROUTES } from "../../constants";
import { addTransaction } from "../../api/api";
import styles from "./AddExpenseScreen.styles";

import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useSelector, useDispatch } from "react-redux";
import { setExpenseData } from "../../store/slices/expenseSlice";

const AddExpense = ({ navigation }) => {
    const dispatch = useDispatch();
    const walletId = useSelector((state) => state.wallet.currentWalletId);

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isValidAmount, setIsValidAmount] = useState(false);
    const [category, setCategory] = useState("other");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [description, setDescription] = useState("");

    const handleDateChange = (selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate.toISOString().split("T")[0]);
    };

    const handleDatePress = () => {
        setShowDatePicker(true);
    };

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleAmountChange = (text) => {
        const unformattedAmount = text.replace(/,/g, "");
        if (!isNaN(parseFloat(unformattedAmount)) || unformattedAmount === "") {
            const formattedAmount = formatNumberWithCommas(unformattedAmount);
            setAmount(formattedAmount);
        }
    };

    const navigateToAiAdvisor = () => {
        dispatch(
            setExpenseData({
                amount: parseFloat(amount.replace(/,/g, "")),
                date,
                category,
                description,
            })
        );
        navigation.navigate(ROUTES.AI_ADVISOR);
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

            await addTransaction(walletId, transactionData);
            navigation.goBack();
        } catch (error) {
            console.error("Error adding expense:", error);
        }
    };

    useEffect(() => {
        const amountIsValid = amount && !isNaN(parseFloat(amount));
        setIsValidAmount(amountIsValid);
    }, [amount]);

    return (
        <Background image={IMAGES.EXPENSE_BACKGROUND}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.Container}>
                    <View style={styles.redSection}>
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
                            <Text style={styles.title}>Add Expense</Text>
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
                                    styles.advisorButton,
                                    !isValidAmount && styles.disabledButton,
                                ]}
                                onPress={navigateToAiAdvisor}
                                disabled={!isValidAmount}
                            >
                                <Text style={styles.advisorButtonText}>
                                    Advisor's Decision!
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    styles.submitButton,
                                    !isValidAmount && styles.disabledButton,
                                ]}
                                onPress={handleSubmit}
                                disabled={!isValidAmount}
                            >
                                <Text style={styles.submitButtonText}>
                                    Add Expense
                                </Text>
                            </TouchableOpacity>
                        </Container>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </Background>
    );
};

export default AddExpense;
