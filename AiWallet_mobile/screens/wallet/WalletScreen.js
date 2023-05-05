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
import { useFocusEffect } from "@react-navigation/native";
import { getWalletSummary, getAllTransactions } from "../../api/api";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { setCurrentTransactionId } from "../../store/slices/walletSlice";

// MAIN
const WalletScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();

    const walletId = useSelector((state) => state.wallet.currentWalletId);

    const [wallet, setWallet] = useState(null);
    const [transactions, setTransactions] = useState([]);

    const loadData = async () => {
        try {
            const fetchedWallet = await getWalletSummary(walletId);
            setWallet(fetchedWallet);

            const fetchedTransactions = await getAllTransactions(walletId);
            setTransactions(fetchedTransactions);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useFocusEffect(
        React.useCallback(() => {
            loadData();
            return () => {}; // cleaning function (krmel el error)
        }, [walletId])
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
                    backgroundColor={COLORS.secondary}
                    buttonText="Add Expense"
                    onPress={() =>
                        navigation.navigate(ROUTES.ADD_EXPENSE, {
                            walletId: walletId,
                        })
                    }
                />
            </View>
            <FlatList
                style={styles.flatList}
                data={transactions.slice().reverse()}
                renderItem={({ item }) => (
                    <TransactionCard
                        transaction={item}
                        onPress={() => {
                            dispatch(setCurrentTransactionId(item._id));
                            navigation.navigate(
                                item.type === "income"
                                    ? ROUTES.UPDATE_INCOME
                                    : ROUTES.UPDATE_EXPENSE
                            );
                        }}
                    />
                )}
                keyExtractor={(item) => item._id}
            />
        </Background>
    );
};
const styles = StyleSheet.create({
    walletCard: {
        marginHorizontal: 10,
        marginTop: 5,
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
