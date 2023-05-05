import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Modal,
    Alert,
} from "react-native";
import { Background, AddWalletButton, AddGoalModal } from "../../components";
import { ROUTES, FONTS, COLORS, SIZES, IMAGES } from "../../constants";
import { getAllGoals, addGoal, deleteGoal } from "../../api/api";

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
                                    Target Amount: ${item.targetAmount}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        ...FONTS.h3,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
        color: COLORS.white,
    },
    flatListContent: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    goalCard: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },

    goalDescription: {
        ...FONTS.body2,
    },
    goalAmount: {
        ...FONTS.body3,
    },
    goalDate: {
        ...FONTS.body4,
    },
    goalModalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    goalModalContent: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        padding: 16,
        maxWidth: "80%",
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
    goalModalDescription: {
        ...FONTS.body2,
    },
    goalModalAmount: {
        ...FONTS.body3,
    },
    goalModalDate: {
        ...FONTS.body4,
    },
    deleteButton: {
        backgroundColor: COLORS.red,
        borderRadius: 5,
        padding: 8,
        marginTop: 10,
        marginBottom: 5,
        alignItems: "center",
    },
    deleteButtonText: {
        ...FONTS.body4,
        color: COLORS.white,
    },
    closeButton: {
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        padding: 8,
        marginTop: 5,
        alignItems: "center",
    },
    closeButtonText: {
        ...FONTS.body4,
        color: COLORS.white,
    },
});

export default Goals;
