import React, { useState } from "react";
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

const AddIncome = ({ route, navigation }) => {
    const { walletId } = route.params;
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [description, setDescription] = useState("");

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate.toISOString().split("T")[0]);
    };
    const showDatePickerInput = () => {
        setShowDatePicker(true);
    };
    const handleSubmit = async () => {
        try {
            const transactionData = {
                type: "income",
                category,
                amount: parseFloat(amount),
                date,
                description,
            };

            await addTransaction(walletId, transactionData);
            navigation.goBack();
        } catch (error) {
            console.error("Error adding income:", error);
        }
    };

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
                            onChangeText={setAmount}
                            value={amount}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.whiteSection}>
                        <Container>
                            <Text style={styles.labelBlack}>Category:</Text>
                            <TextInput
                                style={styles.inputBlack}
                                onChangeText={setCategory}
                                value={category}
                            />

                            <Text style={styles.labelBlack}>Date:</Text>
                            <TouchableOpacity onPress={showDatePickerInput}>
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
                                style={styles.inputBlack}
                                onChangeText={setDescription}
                                value={description}
                            />

                            <TouchableOpacity
                                style={styles.submitButton}
                                onPress={handleSubmit}
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

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    greenSection: {
        height: 200,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: COLORS.primary,
        justifyContent: "space-between",
    },
    whiteSection: {
        flex: 1,
        backgroundColor: COLORS.white,

        paddingTop: 20,
        paddingHorizontal: 20,
    },
    title: {
        ...FONTS.h1,
        color: COLORS.white,
        marginBottom: 20,
    },
    label: {
        ...FONTS.body3,
        color: COLORS.white,
        marginBottom: 5,
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
    input: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
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
    },
    submitButton: {
        backgroundColor: COLORS.darkgreen,
        borderRadius: 5,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    submitButtonText: {
        ...FONTS.body3,
        color: COLORS.white,
    },
});

export default AddIncome;