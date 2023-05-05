import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import {
    Background,
    WalletCard,
    AddWalletButton,
    TransactionCard,
    Container,
} from "../../components";
import { COLORS, IMAGES, ROUTES } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import {
    getWallet,
    updateWallet,
    deleteWallet,
    getWalletSummary,
} from "../../api/api";
import { useSelector } from "react-redux";

const WalletSettings = () => {
    const walletId = useSelector((state) => state.wallet.currentWalletId);
    const [wallet, setWallet] = useState(null);
    const [walletName, setWalletName] = useState("");
    const [saveDisabled, setSaveDisabled] = useState(true);

    const loadData = async () => {
        try {
            const fetchedWallet = await getWalletSummary(walletId);
            setWallet(fetchedWallet);
            setWalletName(fetchedWallet.name);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            loadData();
            return () => {};
        }, [walletId])
    );

    const handleSave = async () => {
        try {
            await updateWallet(walletId, { name: walletName });
            loadData();
            setSaveDisabled(true);
        } catch (error) {
            console.error("Error updating wallet:", error);
        }
    };

    const handleDelete = async () => {
        Alert.alert(
            "Delete Wallet",
            "Are you sure you want to delete this wallet?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Yes",
                    onPress: async () => {
                        try {
                            await deleteWallet(walletId);
                            // Navigate to another screen if needed
                        } catch (error) {
                            console.error("Error deleting wallet:", error);
                        }
                    },
                },
            ],
            { cancelable: false }
        );
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
                        balance={wallet.balance} // Add this line
                    />
                )}
            </View>
            <View style={styles.container}>
                <Text style={styles.label}>Wallet Name</Text>
                <TextInput
                    style={styles.input}
                    value={walletName}
                    onChangeText={(text) => {
                        setWalletName(text);
                        setSaveDisabled(wallet && wallet.name === text);
                    }}
                />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSave}
                        disabled={saveDisabled}
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.deleteButton]}
                        onPress={handleDelete}
                    >
                        <Text style={styles.buttonText}>Delete Wallet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    deleteButton: {
        backgroundColor: COLORS.red,
    },
    walletCard: {
        marginHorizontal: 10,
        marginTop: 5,
    },
});

export default WalletSettings;
