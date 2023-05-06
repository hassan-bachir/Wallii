import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Background } from "../../components";
import { COLORS, SIZES, IMAGES, FONTS } from "../../constants";
import {
    getUserInfo,
    getWalletSummary,
    getAllGoals,
    getWallet,
    getAiAdvice,
} from "../../api/api";
import { useSelector } from "react-redux";

export default function AiAdvisor() {
    const [aiAdvice, setAiAdvice] = useState({ decision: "", explanation: "" });

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

    const requestAiAdvice = async () => {
        try {
            const response = await getAiAdvice({
                aiAdvisorName,
                goals,
                walletSummary,
                budget,
                expenseData: newExpenseData,
            });

            // Update the aiAdvice state with the response
            setAiAdvice({
                decision: response.decision,
                explanation: response.explanation,
            });
        } catch (error) {
            console.error("Error getting AI advice:", error);
        }
    };

    return (
        <Background image={IMAGES.SECONDARY_BACKGROUND}>
            <View style={styles.container}>
                <Text style={styles.title}>{aiAdvisorName}'s Advice:</Text>
                <Text style={styles.subtitle}>
                    This is a simple screen component
                </Text>
                <View style={styles.content}>
                    <Button title="Get AI Advice" onPress={requestAiAdvice} />
                </View>
                <Text style={styles.adviceDecision}>
                    Decision: {aiAdvice.decision}
                </Text>
                <Text style={styles.adviceExplanation}>
                    Explanation: {aiAdvice.explanation}
                </Text>
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
    adviceDecision: {
        ...FONTS.h2,
        color: COLORS.black,
        marginTop: SIZES.padding,
        textAlign: "center",
    },
    adviceExplanation: {
        ...FONTS.body3,
        color: COLORS.black,
        marginTop: SIZES.padding,
        textAlign: "center",
    },
});
