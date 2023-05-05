import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Background, WalletCard, CalenderItem } from "../../components";
import { COLORS, IMAGES, ROUTES } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import { getWalletSummary, getTransactionsByDate } from "../../api/api";
import { useSelector } from "react-redux";
import { Calendar, Agenda } from "react-native-calendars";
import { LogBox } from "react-native";

const WalletStats = () => {
    const walletId = useSelector((state) => state.wallet.currentWalletId);
    const [wallet, setWallet] = useState(null);
    const [transactionsByDate, setTransactionsByDate] = useState({});
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const handleMonthChange = (month) => {
        setCurrentMonth(month.dateString);
    };

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

    const agendaItems = Object.keys(transactionsByDate).reduce(
        (items, date) => ({
            ...items,
            [date]: [transactionsByDate[date]],
        }),
        {}
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
            <View style={styles.container}>
                <Agenda
                    items={agendaItems}
                    renderItem={(item, firstItemInDay) => (
                        <CalenderItem
                            income={item.income}
                            expense={item.expense}
                        />
                    )}
                    rowHasChanged={(r1, r2) =>
                        r1.income !== r2.income || r1.expense !== r2.expense
                    }
                    selected={currentMonth}
                    onDayPress={handleMonthChange}
                    theme={{
                        backgroundColor: COLORS.lightGray,
                        calendarBackground: COLORS.lightGray,
                        textSectionTitleColor: COLORS.primary,
                        selectedDayBackgroundColor: COLORS.primary,
                        selectedDayTextColor: COLORS.white,
                        todayTextColor: COLORS.primary,
                        dayTextColor: COLORS.black,
                        textDisabledColor: COLORS.gray,
                        monthTextColor: COLORS.primary,
                        agendaKnobColor: COLORS.primary,
                    }}
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
    dayContent: {
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    calendarContainer: {
        height: "100%",
    },
});

export default WalletStats;

LogBox.ignoreLogs([
    "VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.",
]);
