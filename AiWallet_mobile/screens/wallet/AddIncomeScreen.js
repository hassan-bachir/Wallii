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
import { COLORS, IMAGES } from "../../constants";
import { addTransaction } from "../../api/api";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";
import styles from "./AddIncomeScreen.styles";

const AddIncome = ({ navigation }) => {
    const walletId = useSelector((state) => state.wallet.currentWalletId);
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
    const handleDatePress = () => {
        setShowDatePicker(true);
    };
    const handleSubmit = async () => {
        try {
            const transactionData = {
                type: "income",
                category,
                amount: parseFloat(amount.replace(/,/g, "")),
                date,
                description,
            };

            await addTransaction(walletId, transactionData);
            navigation.goBack();
        } catch (error) {
            console.error("Error adding income:", error);
        }
    };

    useEffect(() => {
        const amountIsValid = amount && !isNaN(parseFloat(amount));
        setIsValidAmount(amountIsValid);
    }, [amount]);

    return (
        <Background image={IMAGES.INCOME_BACKGROUND}>
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
                            <Text style={styles.title}>Add Income</Text>
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
                                <Picker.Item label="Salary" value="Salary" />
                                <Picker.Item
                                    label="Investments"
                                    value="Investments"
                                />
                                <Picker.Item
                                    label="Freelance"
                                    value="Freelance"
                                />
                                <Picker.Item label="Gifts" value="Gifts" />
                                <Picker.Item label="Refunds" value="Refunds" />
                                <Picker.Item label="Rent" value="Rent" />
                                <Picker.Item label="Savings" value="Savings" />
                                <Picker.Item
                                    label="Side Hustle"
                                    value="Side Hustle"
                                />
                                <Picker.Item
                                    label="Business"
                                    value="Business"
                                />
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
                                    Add Income
                                </Text>
                            </TouchableOpacity>
                        </Container>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </Background>
    );
};

export default AddIncome;
