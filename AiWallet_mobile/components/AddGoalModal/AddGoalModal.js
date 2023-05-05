import React, { useState } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Text,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddGoalModal = ({ isModalVisible, setModalVisible, handleSaveGoal }) => {
    const [goalDescription, setGoalDescription] = useState("");
    const [goalAmount, setGoalAmount] = useState("");
    const [goalDate, setGoalDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleCancel = () => {
        setModalVisible(false);
    };

    const handleSave = () => {
        if (goalDescription && goalAmount && goalDate) {
            const goalData = {
                description: goalDescription,
                targetAmount: parseFloat(goalAmount),
                targetDate: goalDate.toISOString(),
            };

            handleSaveGoal(goalData);
        }
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || goalDate;
        setShowDatePicker(false);
        setGoalDate(currentDate);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput
                        placeholder="Goal Description"
                        value={goalDescription}
                        onChangeText={setGoalDescription}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Goal Amount"
                        value={goalAmount}
                        onChangeText={setGoalAmount}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                    <TouchableOpacity
                        onPress={() => setShowDatePicker(true)}
                        style={styles.datePickerButton}
                    >
                        <Text style={styles.datePickerButtonText}>
                            {goalDate.toDateString()}
                        </Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={goalDate}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                    <TouchableOpacity
                        onPress={handleSave}
                        style={[
                            styles.saveButton,
                            !goalDescription || !goalAmount || !goalDate
                                ? { backgroundColor: COLORS.gray }
                                : null,
                        ]}
                        disabled={!goalDescription || !goalAmount || !goalDate}
                    >
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleCancel}
                        style={styles.cancelButton}
                    >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 35,
        paddingHorizontal: 0,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        height: 40,
        borderBottomColor: COLORS.secondary,
        borderBottomWidth: 1,
        width: "90%",
        borderRadius: 0,
        marginBottom: 30,
        paddingHorizontal: SIZES.padding,
    },
    datePickerButton: {
        width: "90%",
        height: 40,
        borderBottomColor: COLORS.secondary,
        borderBottomWidth: 1,
        marginBottom: 30,
        paddingHorizontal: SIZES.padding,
        justifyContent: "center",
    },
    datePickerButtonText: {
        ...FONTS.body3,
        color: COLORS.black,
    },
    saveButton: {
        width: "90%",
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.radius,
        alignItems: "center",
        marginBottom: 10,
    },
    saveButtonText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    cancelButton: {
        width: "90%",
        backgroundColor: COLORS.secondary,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.radius,
        alignItems: "center",
    },
    cancelButtonText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
});

export default AddGoalModal;
