import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import {
    Background,
    WalletCard,
    Container,
    Button,
    CustomTextInput,
} from "../../components";
import { COLORS, IMAGES, ROUTES } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import { getWalletSummary, updateWallet, deleteWallet } from "../../api/api";
import { useSelector } from "react-redux";

const WalletSettings = () => {
    const walletId = useSelector((state) => state.wallet.currentWalletId);
    const [wallet, setWallet] = useState(null);
    const [walletName, setWalletName] = useState("");
    const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

    const loadData = async () => {
        try {
            const fetchedWallet = await getWalletSummary(walletId);
            setWallet(fetchedWallet);
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

    useEffect(() => {
        if (wallet) {
            setWalletName(wallet.name);
        }
    }, [wallet]);

    const handleWalletNameChange = (text) => {
        setWalletName(text);
        setIsSaveButtonDisabled(wallet.name === text || text === "");
    };

    const handleSaveButtonPress = async () => {
        try {
            await updateWallet(walletId, { name: walletName });
            loadData();
        } catch (error) {
            console.error("Error updating wallet name:", error);
        }
    };

    const handleDeleteButtonPress = async () => {
        Alert.alert(
            "Delete Wallet",
            "Are you sure you want to delete this wallet?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: async () => {
                        try {
                            await deleteWallet(walletId);
                            // Navigate back to previous screen or update app state to remove the deleted wallet
                        } catch (error) {
                            console.error("Error deleting wallet:", error);
                        }
                    },
                    style: "destructive",
                },
            ],
            { cancelable: true }
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
                    />
                )}
            </View>
            <View style={styles.container}>
                <CustomTextInput
                    label="Change Wallet Name"
                    placeholder="Wallet Name"
                    onChangeText={handleWalletNameChange}
                    value={walletName}
                />
                <Button
                    onPress={handleSaveButtonPress}
                    title="Save"
                    style={styles.button}
                    disabled={isSaveButtonDisabled}
                />
                <Button
                    onPress={handleDeleteButtonPress}
                    title="Delete Wallet"
                    style={[styles.button, { backgroundColor: COLORS.red }]}
                />
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
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    walletCard: {
        marginHorizontal: 10,
        marginTop: 5,
    },
    button: {
        width: "80%",
        marginTop: 15,
    },
});

export default WalletSettings;
