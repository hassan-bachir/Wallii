import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Modal, Text } from "react-native";
import { COLORS } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./AddGoalModal.styles";

const AddGoalModal = ({ visible, setModalVisible, handleSaveGoal }) => {
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
            visible={visible}
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

export default AddGoalModal;
