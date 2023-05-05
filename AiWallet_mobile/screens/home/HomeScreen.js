import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import {
    Button,
    Background,
    FinanceSummaryBanner,
    AddWalletButton,
    WalletCard,
    AddWalletModal,
} from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { ROUTES, FONTS, COLORS, SIZES, IMAGES } from "../../constants";
import {
    getUserWallets,
    getWalletSummary,
    addWallet,
    getFinancialSummary,
} from "../../api/api";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setCurrentWalletId } from "../../store/slices/walletSlice";

export default function Home({ navigation }) {
    const dispatch = useDispatch();

    const [wallets, setWallets] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [newWalletName, setNewWalletName] = useState("");
    const [financialSummary, setFinancialSummary] = useState(null);

    const fetchFinancialSummaryData = useCallback(async () => {
        try {
            const data = await getFinancialSummary();
            setFinancialSummary(data);
        } catch (error) {
            console.error("Error fetching financial summary:", error);
        }
    }, []);

    const fetchData = useCallback(async () => {
        try {
            const fetchedWallets = await getUserWallets();
            const walletsWithSummary = await Promise.all(
                fetchedWallets.map(async (wallet) => {
                    const summary = await getWalletSummary(wallet._id);
                    return { ...wallet, ...summary };
                })
            );
            setWallets(walletsWithSummary);
        } catch (error) {
            console.error("Error fetching wallets and summaries:", error);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchData();
            fetchFinancialSummaryData();
            return () => {};
        }, [fetchData, fetchFinancialSummaryData])
    );

    const navigateToHomeSettings = () => {
        navigation.navigate(ROUTES.HOME_SETTINGS);
    };
    const handleSaveWallet = async () => {
        try {
            await addWallet({ name: newWalletName });
            fetchData();
            setNewWalletName("");
            setModalVisible(false);
        } catch (error) {
            console.error("Error adding wallet:", error);
        }
    };
    const handleAddWalletPress = () => {
        setModalVisible(true);
    };

    return (
        <Background image={IMAGES.HOMEBACKGROUND}>
            <SafeAreaView style={styles.Safe}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Wallets</Text>
                    <Ionicons
                        name="ios-settings"
                        size={32}
                        color="white"
                        onPress={navigateToHomeSettings}
                    />
                </View>
                <FinanceSummaryBanner financialSummary={financialSummary} />
                <AddWalletButton onPress={handleAddWalletPress} />
                <FlatList
                    data={wallets}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <WalletCard
                            walletId={item._id}
                            name={item.name}
                            totalIncome={item.totalIncome}
                            totalExpenses={item.totalExpenses}
                            onPress={(id) => {
                                dispatch(setCurrentWalletId(id));
                                navigation.navigate(ROUTES.WALLET);
                            }}
                        />
                    )}
                    contentContainerStyle={styles.walletList}
                />
                <AddWalletModal
                    isModalVisible={isModalVisible}
                    setModalVisible={setModalVisible}
                    newWalletName={newWalletName}
                    setNewWalletName={setNewWalletName}
                    handleSaveWallet={handleSaveWallet}
                />
            </SafeAreaView>
        </Background>
    );
}

const styles = StyleSheet.create({
    Safe: {
        paddingTop: 20,
    },
    header: {
        marginTop: 20,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerText: {
        ...FONTS.h1,
        color: COLORS.white,
    },
    headerText: {
        ...FONTS.h1,
        color: COLORS.white,
    },
    walletList: {
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.base,
    },
});
