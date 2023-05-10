import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Modal,
    Alert,
} from "react-native";
import { Background, AddWalletButton, AddGoalModal } from "../../components";
import { IMAGES } from "../../constants";
import { getAllGoals, addGoal, deleteGoal } from "../../api/api";
import styles from "./GoalsScreen.styles";

const Goals = () => {
    const [goals, setGoals] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [isGoalModalVisible, setGoalModalVisible] = useState(false);

    const handleAddGoalPress = () => {
        setModalVisible(true);
    };

    const handleSaveGoal = async (goalData) => {
        try {
            const addedGoalResponse = await addGoal(goalData);

            const addedGoal = addedGoalResponse.updatedUser.goals.slice(-1)[0];

            setGoals((prevGoals) => [...prevGoals, addedGoal]);

            setModalVisible(false);
        } catch (error) {
            console.error("Error adding goal:", error);
        }
    };
    const handleGoalCardPress = (goal) => {
        setSelectedGoal(goal);
        setGoalModalVisible(true);
    };

    const handleDeleteGoal = async () => {
        Alert.alert(
            "Delete Goal",
            "Are you sure you want to delete this goal?",
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel",
                },
                {
                    text: "Yes",
                    onPress: async () => {
                        try {
                            await deleteGoal(selectedGoal._id);
                            setGoals(
                                goals.filter(
                                    (goal) => goal._id !== selectedGoal._id
                                )
                            );
                            setGoalModalVisible(false);
                        } catch (error) {
                            console.error("Error deleting goal:", error);
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const fetchedGoals = await getAllGoals();
                setGoals(fetchedGoals);
            } catch (error) {
                console.error("Error fetching goals:", error);
            }
        };

        fetchGoals();
    }, []);
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <Background image={IMAGES.HOMEBACKGROUND}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>
                    Goals to Help AI Advisor in Decisions!
                </Text>
                <AddWalletButton
                    buttonText="Add Goal +"
                    onPress={handleAddGoalPress}
                />
                <FlatList
                    data={goals}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleGoalCardPress(item)}
                        >
                            <View style={styles.goalCard}>
                                <Text style={styles.goalDescription}>
                                    {item.description}
                                </Text>
                                <Text style={styles.goalAmount}>
                                    Target Amount: $
                                    {numberWithCommas(item.targetAmount)}
                                </Text>
                                <Text style={styles.goalDate}>
                                    Target Date:{" "}
                                    {item.targetDate
                                        ? item.targetDate.split("T")[0]
                                        : ""}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={styles.flatListContent}
                />
                <Modal visible={isGoalModalVisible} transparent>
                    <View style={styles.goalModalContainer}>
                        <View style={styles.goalModalContent}>
                            {selectedGoal && (
                                <>
                                    <Text style={styles.goalModalDescription}>
                                        {selectedGoal.description}
                                    </Text>
                                    <Text style={styles.goalModalAmount}>
                                        Target Amount: $
                                        {selectedGoal.targetAmount}
                                    </Text>
                                    <Text style={styles.goalModalDate}>
                                        Target Date:{" "}
                                        {selectedGoal.targetDate
                                            ? selectedGoal.targetDate.split(
                                                  "T"
                                              )[0]
                                            : ""}
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.deleteButton}
                                        onPress={handleDeleteGoal}
                                    >
                                        <Text style={styles.deleteButtonText}>
                                            Delete Goal
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            )}
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setGoalModalVisible(false)}
                            >
                                <Text style={styles.closeButtonText}>
                                    Close
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <AddGoalModal
                    visible={isModalVisible}
                    setModalVisible={setModalVisible}
                    handleSaveGoal={handleSaveGoal}
                />
            </SafeAreaView>
        </Background>
    );
};

export default Goals;
