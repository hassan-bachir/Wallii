import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView,
    TextInput,
} from "react-native";
import { Background, WalletCard, Button } from "../../components";
import { IMAGES, ROUTES } from "../../constants";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import styles from "./WalletSettingsScreen.styles";
import { getWalletSummary, updateWallet, deleteWallet } from "../../api/api";
import { useSelector } from "react-redux";

const WalletSettings = () => {
    const navigation = useNavigation();

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

    const navigateToHome = () => {
        navigation.navigate(ROUTES.HOME);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };

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
                            navigateToHome();
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

    return (
        <Background image={IMAGES.HOMEBACKGROUND}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
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

                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Change Wallet Name</Text>

                            <TextInput
                                style={styles.input}
                                onChangeText={handleWalletNameChange}
                                value={walletName}
                                multiline={true}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={handleSaveButtonPress}
                            title="Save"
                            style={styles.saveButton}
                            disabled={isSaveButtonDisabled}
                        />
                        <Button
                            onPress={handleDeleteButtonPress}
                            title="Delete Wallet"
                            style={styles.deleteButton}
                        />
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </Background>
    );
};

export default WalletSettings;
