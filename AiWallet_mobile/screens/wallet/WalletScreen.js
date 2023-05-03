import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {
    Background,
    WalletCard,
    AddWalletButton,
    TransactionCard,
} from "../../components";
import { IMAGES } from "../../constants";

import { getWalletSummary, getAllTransactions } from "../../api/api";

const WalletScreen = ({ route }) => {
    const { walletId } = route.params;
    const [wallet, setWallet] = useState(null);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const fetchedWallet = await getWalletSummary(walletId);
                setWallet(fetchedWallet);
            } catch (error) {
                console.error("Error fetching wallet:", error);
            }
        };

        const fetchTransactions = async () => {
            try {
                const fetchedTransactions = await getAllTransactions(walletId);
                setTransactions(fetchedTransactions);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };

        fetchWallet();
        fetchTransactions();
    }, [walletId]);

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
            <AddWalletButton buttonText="Add Transaction" />

            <FlatList
                style={styles.flatList}
                data={transactions}
                renderItem={({ item }) => (
                    <TransactionCard transaction={item} />
                )}
                keyExtractor={(item) => item._id}
            />
        </Background>
    );
};
const styles = StyleSheet.create({
    walletCard: {
        marginHorizontal: 10,
    },
    flatList: {
        paddingHorizontal: 10,
    },
});

export default WalletScreen;
