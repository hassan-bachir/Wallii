import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Background, WalletCard } from "../../components";
import { COLORS, IMAGES } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import { getWalletSummary, addBudget, deleteBudget } from "../../api/api";
import { useSelector } from "react-redux";

const WalletBudget = () => {
    const walletId = useSelector((state) => state.wallet.currentWalletId);
    const [wallet, setWallet] = useState(null);

    const loadData = async () => {
        try {
            const fetchedWallet = await getWalletSummary(walletId);
            setWallet(fetchedWallet);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleAddBudget = async () => {
        // Add your budget data here
        const budgetData = {
            name: "Your Budget Name",
            amount: 1000,
            startDate: "2023-05-01",
            endDate: "2023-05-31",
        };

        try {
            await addBudget(walletId, budgetData);
            loadData();
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
            return () => {}; // Returning an empty cleanup function
        }, [])
    );

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
                        onPress={handleAddBudget}
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
            </View>
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
});

export default WalletBudget;
