import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView,
    TextInput,
} from "react-native";
import {
    Background,
    WalletCard,
    Container,
    Button,
    CustomTextInput,
} from "../../components";
import { COLORS, FONTS, IMAGES, SIZES, ROUTES } from "../../constants";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { getWalletSummary, updateWallet, deleteWallet } from "../../api/api";
import { useSelector } from "react-redux";

const WalletSettings = () => {
    const navigation = useNavigation();

    const walletId = useSelector((state) => state.wallet.currentWalletId);
    const [wallet, setWallet] = useState(null);
    const [walletName, setWalletName] = useState("");
    const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
    const [isFocused, setIsFocused] = useState(false);

    const navigateToHome = () => {
        navigation.navigate(ROUTES.HOME);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "space-between",
        marginBottom: 150,
    },
    formContainer: {
        marginTop: 30,

        margin: 10,

        justifyContent: "space-between",
        paddingTop: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    walletCard: {
        marginHorizontal: 10,
        marginTop: 5,
    },
    deleteButton: {
        backgroundColor: COLORS.red,
        marginTop: 15,
    },
    labelBlack: {
        ...FONTS.h3,
    },
    descriptionInput: {
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        height: 45,
        color: COLORS.black,
        ...FONTS.body1,
        backgroundColor: "#B2FFFA",
        borderRadius: 3,
        width: "100%",
    },
    inputContainer: {
        alignItems: "center",
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        padding: 10,
        color: COLORS.primary,
        ...FONTS.body3,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        ...FONTS.body2,
        color: COLORS.primary,
        marginBottom: 5,
    },
});

export default WalletSettings;
