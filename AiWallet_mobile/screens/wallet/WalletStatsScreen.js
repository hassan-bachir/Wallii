import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Background, WalletCard, Container } from "../../components";
import { COLORS, IMAGES, ROUTES } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import { getWalletSummary, getTransactionsByDate } from "../../api/api";
import { useSelector } from "react-redux";
import { Calendar } from "react-native-calendars";

const WalletStats = () => {
    const walletId = useSelector((state) => state.wallet.currentWalletId);
    const [wallet, setWallet] = useState(null);
    const [transactionsByDate, setTransactionsByDate] = useState({});

    const loadData = async () => {
        try {
            const fetchedWallet = await getWalletSummary(walletId);
            const fetchedTransactionsByDate = await getTransactionsByDate(
                walletId
            );
            setWallet(fetchedWallet);
            setTransactionsByDate(fetchedTransactionsByDate);
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

    const renderDayContent = ({ date, state }) => {
        const dateString = `${date.year}-${date.month < 10 ? "0" : ""}${
            date.month
        }-${date.day < 10 ? "0" : ""}${date.day}`;
        const transaction = transactionsByDate[dateString];

        if (transaction) {
            return (
                <View>
                    <Text>{`Income: ${transaction.income}`}</Text>
                    <Text>{`Expense: ${transaction.expense}`}</Text>
                </View>
            );
        }

        return <Text />;
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
                <Calendar
                    markingType={"custom"}
                    dayComponent={({ date, state }) =>
                        renderDayContent({ date, state })
                    }
                />
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
});

export default WalletStats;
