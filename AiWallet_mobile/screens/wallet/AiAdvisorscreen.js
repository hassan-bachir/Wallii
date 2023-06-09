import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Background } from "../../components";
import { COLORS, IMAGES } from "../../constants";
import {
    getUserInfo,
    getWalletSummary,
    getAllGoals,
    getWallet,
    getAiAdvice,
} from "../../api/api";
import { useSelector } from "react-redux";
import styles from "./AiAdvisorscreen.styles";

export default function AiAdvisor() {
    const walletId = useSelector((state) => state.wallet.currentWalletId);
    const newExpenseData = useSelector((state) => state.expense);

    const [aiAdvice, setAiAdvice] = useState({ decision: "", explanation: "" });
    const [adviceFetched, setAdviceFetched] = useState(false);
    const [walletSummary, setWalletSummary] = useState(null);
    const [aiAdvisorName, setAiAdvisorName] = useState("");
    const [goals, setGoals] = useState([]);
    const [budget, setBudget] = useState(null);
    const [basicSalary, setBasicSalary] = useState(0.0);
    const [username, setUserName] = useState("");

    useEffect(() => {
        const fetchAdvisorName = async () => {
            try {
                const userInfo = await getUserInfo();
                setAiAdvisorName(userInfo.aiAdvisorName || "Advisor");
                setBasicSalary(userInfo.basicSalary || 1000);
                setUserName(userInfo.name || "");
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
                basicSalary,
                username,
            });

            setAiAdvice({
                decision: response.decision,
                explanation: response.explanation,
            });
            setAdviceFetched(true);
        } catch (error) {
            console.error("Error getting AI advice:", error);
        }
    };

    return (
        <Background image={IMAGES.EXPENSE_BACKGROUND}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{aiAdvisorName}'s Advice</Text>
                    <Text style={styles.subtitle}>
                        Take control of your financial life!
                    </Text>
                </View>
                <View>
                    <View
                        style={[
                            styles.adviceCard,
                            {
                                backgroundColor:
                                    aiAdvice.decision === "Disapprove"
                                        ? COLORS.secondary
                                        : COLORS.primary,
                            },
                        ]}
                    >
                        <Text style={styles.adviceCardText}>
                            {!adviceFetched
                                ? "ZZZ"
                                : aiAdvice.decision === "Disapprove"
                                ? "Bad Idea!"
                                : "Go Ahead!"}
                        </Text>
                    </View>

                    <View
                        style={[
                            styles.adviceExplanationContainer,
                            {
                                backgroundColor:
                                    aiAdvice.decision === "Disapprove"
                                        ? COLORS.secondary
                                        : COLORS.primary,
                            },
                        ]}
                    >
                        <Text style={styles.adviceExplanation}>
                            {aiAdvice.explanation}
                        </Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={requestAiAdvice}
                    >
                        <Text style={styles.buttonText}>Get AI Advice</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Background>
    );
}
