import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {
    Background,
    WalletCard,
    AddWalletButton,
    TransactionCard,
    Container,
} from "../../components";
import { COLORS, IMAGES, ROUTES } from "../../constants";

import { getWalletSummary, getAllTransactions } from "../../api/api";

const WalletScreen = ({ route, navigation }) => {
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
            <View style={styles.ButtonsContainer}>
                <AddWalletButton
                    backgroundColor={COLORS.darkgreen}
                    buttonText="Add Income"
                    onPress={() =>
                        navigation.navigate(ROUTES.ADD_INCOME, {
                            walletId: walletId,
                        })
                    }
                />
                <AddWalletButton
                    backgroundColor={COLORS.red}
                    buttonText="Add Expense"
                    onPress={() => navigation.navigate(ROUTES.ADD_EXPENSE)}
                />
            </View>
            <FlatList
                style={styles.flatList}
                data={transactions.slice().reverse()}
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
    ButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default WalletScreen;
