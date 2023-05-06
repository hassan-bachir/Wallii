import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Background } from "../../components";
import { COLORS, SIZES, IMAGES, FONTS } from "../../constants";
import {
    getUserInfo,
    getWalletSummary,
    getAllGoals,
    getWallet,
} from "../../api/api";
import { useSelector } from "react-redux";

export default function AiAdvisor() {
    const walletId = useSelector((state) => state.wallet.currentWalletId);
    const newExpenseData = useSelector((state) => state.expense);

    const [walletSummary, setWalletSummary] = useState(null);
    const [aiAdvisorName, setAiAdvisorName] = useState("");
    const [goals, setGoals] = useState([]);
    const [budget, setBudget] = useState(null);

    useEffect(() => {
        const fetchAdvisorName = async () => {
            try {
                const userInfo = await getUserInfo();
                setAiAdvisorName(userInfo.aiAdvisorName || "Advisor");
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        const fetchGoals = async () => {
            try {
                const userGoals = await getAllGoals();
                setGoals(userGoals);
            } catch (error) {
                console.error("Error fetching user goals:", error);
            }
        };

        const fetchWalletSummary = async () => {
            try {
                const summary = await getWalletSummary(walletId);
                setWalletSummary(summary);
            } catch (error) {
                console.error("Error fetching wallet summary:", error);
            }
        };

        const fetchBudget = async () => {
            try {
                const Wallet = await getWallet(walletId);

                if (Wallet.budget) {
                    setBudget(Wallet.budget);
                }
            } catch (error) {
                console.error("Error fetching budget:", error);
            }
        };
        fetchBudget();
        fetchAdvisorName();
        fetchGoals();
        fetchWalletSummary();
    }, []);

    console.log("aiAdvisorName:", aiAdvisorName);
    console.log("goals:", goals);
    console.log("wallet summary:", walletSummary);
    console.log("Budget:", budget);
    console.log("Expense Data:", newExpenseData);

    return (
        <Background image={IMAGES.SECONDARY_BACKGROUND}>
            <View style={styles.container}>
                <Text style={styles.title}>{aiAdvisorName}'s Advice:</Text>
                <Text style={styles.subtitle}>
                    This is a simple screen component
                </Text>
                <View style={styles.content}>
                    <Text style={styles.text}>
                        You can put any content you want here!
                    </Text>
                </View>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

        padding: SIZES.padding,
    },
    title: {
        ...FONTS.h1,
        color: COLORS.white,
    },
    subtitle: {
        fontSize: SIZES.h3,
        color: COLORS.white,
        marginBottom: SIZES.padding,
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: SIZES.radius,
        padding: SIZES.padding * 2,
    },
    text: {
        fontSize: SIZES.body3,
        color: COLORS.black,
        textAlign: "center",
    },
});
