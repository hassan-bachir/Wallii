import React, { useState } from "react";
import { View } from "react-native";
import { Background, WalletCard, CalenderItem } from "../../components";
import { COLORS, IMAGES } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import { getWalletSummary, getTransactionsByDate } from "../../api/api";
import { useSelector } from "react-redux";
import { Agenda } from "react-native-calendars";
import styles from "./WalletStatsScreen.styles";

const WalletStats = () => {
    const walletId = useSelector((state) => state.wallet.currentWalletId);

    const [wallet, setWallet] = useState(null);
    const [transactionsByDate, setTransactionsByDate] = useState({});
    const [currentMonth, setCurrentMonth] = useState(new Date());

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

    const handleMonthChange = (month) => {
        setCurrentMonth(month.dateString);
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

export default WalletStats;
