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
import { Picker } from "@react-native-picker/picker";

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

    const handleDatePress = () => {
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
                            <Picker
                                style={styles.picker}
                                selectedValue={category}
                                onValueChange={(itemValue) =>
                                    setCategory(itemValue)
                                }
                            >
                                <Picker.Item
                                    label="Select a category"
                                    value=""
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
    picker: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: 10,

        marginBottom: 20,
        borderColor: COLORS.gray,
        borderWidth: 1,
    },
});

export default AddIncome;
