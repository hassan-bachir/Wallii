import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { Background, Container } from "../../components";
import { COLORS, FONTS, IMAGES, ROUTES } from "../../constants";
import { addTransaction } from "../../api/api";

import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

//MAIN
const AddExpense = ({ route, navigation }) => {
    const { walletId } = route.params;
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isValidAmount, setIsValidAmount] = useState(false);

    const [category, setCategory] = useState("other");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [description, setDescription] = useState("");

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate.toISOString().split("T")[0]);
    };
    useEffect(() => {
        // Check if the amount is not empty and a valid number
        const amountIsValid = amount && !isNaN(parseFloat(amount));
        setIsValidAmount(amountIsValid);
    }, [amount]);

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const handleAmountChange = (text) => {
        const unformattedAmount = text.replace(/,/g, ""); // Remove any existing commas
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
                type: "expense", // Changed type to "expense"
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
                            {/* Changed title */}
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
                                {/* Update the Picker items with relevant expense categories */}
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
                                    editable={false} // Disables manual editing
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

const styles = StyleSheet.create({
    // Updated the styles to match the new colors and design
    Container: {
        flex: 1,
    },
    redSection: {
        height: 200,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: COLORS.secondary,
        justifyContent: "space-between",
    },
    whiteSection: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
    },
    title: {
        ...FONTS.h1,
        color: COLORS.white,
        marginBottom: 20,
    },
    Amountlabel: {
        ...FONTS.h3,
        color: COLORS.white,
        marginBottom: 5,
    },
    labelBlack: {
        ...FONTS.body3,
        color: COLORS.black,
        marginBottom: 5,
    },
    amountinput: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
        height: 40,
    },
    inputBlack: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
        borderColor: COLORS.gray,
        borderWidth: 1,
        height: 40,
    },
    descriptionInput: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
        borderColor: "black",
        borderWidth: 1,
        height: 80,
    },
    submitButton: {
        backgroundColor: COLORS.red,
        borderRadius: 5,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    submitButtonText: {
        ...FONTS.body3,
        color: COLORS.white,
    },
    picker: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderColor: COLORS.gray,
        borderWidth: 1,
    },
    disabledButton: {
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default AddExpense;
