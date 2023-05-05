import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TextInput,
    Alert,
} from "react-native";
import { Background, WalletCard } from "../../components";
import { COLORS, IMAGES } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import {
    getWalletSummary,
    addBudget,
    deleteBudget,
    getWallet,
    getTransactionsByDate,
} from "../../api/api";
import { useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
} from "victory-native";

const WalletBudget = () => {
    const walletId = useSelector((state) => state.wallet.currentWalletId);
    const [wallet, setWallet] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [budgetName, setBudgetName] = useState("");
    const [budgetAmount, setBudgetAmount] = useState("");
    const [budgetStartDate, setBudgetStartDate] = useState(new Date());
    const [budgetEndDate, setBudgetEndDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [budget, setBudget] = useState(null);
    const loadData = async () => {
        try {
            const Wallet = await getWallet(walletId);
            setWallet(Wallet);

            if (Wallet.budget) {
                setBudget(Wallet.budget);
            }

            const fetchedWallet = await getWalletSummary(walletId);
            setWallet(fetchedWallet);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleAddBudget = async () => {
        if (
            budgetName === "" ||
            budgetAmount === "" ||
            budgetStartDate === "" ||
            budgetEndDate === ""
        ) {
            Alert.alert(
                "Incomplete Information",
                "Please fill in all the fields."
            );
            return;
        }

        const budgetData = {
            name: budgetName,
            amount: parseFloat(budgetAmount),
            startDate: budgetStartDate.toISOString(),
            endDate: budgetEndDate.toISOString(),
        };

        try {
            await addBudget(walletId, budgetData);
            loadData();
            setModalVisible(false);
        } catch (error) {
            console.error("Error adding budget:", error);
        }
    };

    const handleDeleteBudget = () => {
        Alert.alert(
            "Delete Budget",
            "Are you sure you want to delete the budget?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await deleteBudget(walletId);
                            loadData();
                        } catch (error) {
                            console.error("Error deleting budget:", error);
                        }
                    },
                },
            ]
        );
    };

    useEffect(() => {
        loadData();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            loadData();
            return () => {};
        }, [])
    );

    const showStartDatePickerModal = () => {
        setShowStartDatePicker(true);
    };

    const showEndDatePickerModal = () => {
        setShowEndDatePicker(true);
    };

    const handleStartDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || budgetStartDate;
        setShowStartDatePicker(false);
        setBudgetStartDate(currentDate);
    };

    const handleEndDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || budgetEndDate;
        setShowEndDatePicker(false);
        setBudgetEndDate(currentDate);
    };

    return (
        <Background image={IMAGES.HOMEBACKGROUND}>
            <View style={styles.walletCard}>
                {wallet && (
                    <WalletCard
                        walletId={wallet._id}
                        name={wallet.name}
                        totalIncome={wallet.totalIncome}
                        totalExpenses={wallet.totalExpenses}
                    />
                )}
            </View>
            <View style={styles.container}>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.buttonText}>Add Budget</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={handleDeleteBudget}
                    >
                        <Text style={styles.buttonText}>Delete Budget</Text>
                    </TouchableOpacity>
                </View>
                {wallet &&
                    !isNaN(wallet.totalExpenses) &&
                    (budget ? !isNaN(budget.amount) : true) && (
                        <VictoryChart
                            theme={VictoryTheme.material}
                            domainPadding={{ x: 50 }}
                            style={{
                                parent: { alignItems: "center", marginTop: 30 },
                            }}
                        >
                            <VictoryAxis
                                tickValues={[1, 2]}
                                tickFormat={["Budget Amount", "Total Expenses"]}
                            />
                            <VictoryAxis
                                dependentAxis
                                tickFormat={(x) => `$${x}`}
                            />
                            <VictoryBar
                                data={[
                                    {
                                        x: "Budget Amount",
                                        y: budget ? budget.amount : 0,
                                    },
                                    {
                                        x: "Total Expenses",
                                        y: wallet.totalExpenses,
                                    },
                                ]}
                                style={{
                                    data: {
                                        fill: ({ datum }) =>
                                            datum.x === "Total Expenses"
                                                ? COLORS.red
                                                : COLORS.darkgreen,
                                    },
                                }}
                                animate={{
                                    duration: 2000,
                                    onLoad: { duration: 1000 },
                                }}
                                barWidth={80}
                            />
                        </VictoryChart>
                    )}
            </View>

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.input}
                            placeholder="Budget Name"
                            value={budgetName}
                            onChangeText={setBudgetName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Amount"
                            keyboardType="numeric"
                            value={budgetAmount}
                            onChangeText={setBudgetAmount}
                        />
                        <TouchableOpacity
                            style={styles.input}
                            onPress={showStartDatePickerModal}
                        >
                            <Text>
                                Start Date:{" "}
                                {budgetStartDate.toISOString().split("T")[0]}
                            </Text>
                        </TouchableOpacity>
                        {showStartDatePicker && (
                            <DateTimePicker
                                value={budgetStartDate}
                                mode="date"
                                display="default"
                                onChange={handleStartDateChange}
                            />
                        )}
                        <TouchableOpacity
                            style={styles.input}
                            onPress={showEndDatePickerModal}
                        >
                            <Text>
                                End Date:{" "}
                                {budgetEndDate.toISOString().split("T")[0]}
                            </Text>
                        </TouchableOpacity>
                        {showEndDatePicker && (
                            <DateTimePicker
                                value={budgetEndDate}
                                mode="date"
                                display="default"
                                onChange={handleEndDateChange}
                            />
                        )}

                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[
                                    styles.modalButton,
                                    styles.cancelButton,
                                ]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.saveButton]}
                                onPress={handleAddBudget}
                            >
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    walletCard: {
        marginHorizontal: 10,
        marginTop: 5,
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 10,
    },
    addButton: {
        flex: 1,
        backgroundColor: COLORS.darkgreen,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    deleteButton: {
        flex: 1,
        backgroundColor: COLORS.red,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: "bold",
        textAlign: "center",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 10,
        width: "80%",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    modalButton: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: COLORS.gray,
    },
    saveButton: {
        backgroundColor: COLORS.primary,
    },
});

export default WalletBudget;
