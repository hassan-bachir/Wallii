import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import {
    Button,
    Background,
    FinanceSummaryBanner,
    AddWalletButton,
    WalletCard,
} from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { ROUTES, FONTS, COLORS, SIZES, IMAGES } from "../../constants";
import { getUserWallets, getWalletSummary } from "../../api/api";
import { useFocusEffect } from "@react-navigation/native";

export default function Home({ navigation }) {
    const [wallets, setWallets] = useState([]);
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
            return () => {};
        }, [fetchData])
    );

    const navigateToHomeSettings = () => {
        navigation.navigate(ROUTES.HOME_SETTINGS);
    };

    const handleAddWalletPress = () => {};
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
                <FinanceSummaryBanner />
                <AddWalletButton onPress={handleAddWalletPress} />
                <FlatList
                    data={wallets}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <WalletCard
                            name={item.name}
                            totalIncome={item.totalIncome}
                            totalExpenses={item.totalExpenses}
                        />
                    )}
                    contentContainerStyle={styles.walletList}
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
