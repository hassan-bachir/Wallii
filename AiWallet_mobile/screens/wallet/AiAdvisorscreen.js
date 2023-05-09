import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Background, Button } from "../../components";
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
    const [adviceFetched, setAdviceFetched] = useState(false);

    const walletId = useSelector((state) => state.wallet.currentWalletId);
    const newExpenseData = useSelector((state) => state.expense);

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

    // console.log("name:", username);
    // console.log("salary:", basicSalary);
    // console.log("GOALS:", goals);
    // console.log("BUDGET:", budget);
    // console.log("AIADVISOR:", aiAdvisorName);
    // console.log("WALLET:", walletSummary);
    // console.log("NEW EXPENSE:", newExpenseData);
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

                    <View style={styles.adviceExplanationContainer}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding,
        textAlign: "center",
        justifyContent: "space-between",
    },
    title: {
        ...FONTS.h1,
        marginTop: 30,
        marginBottom: SIZES.base,
        textAlign: "center",
        color: COLORS.white,
    },
    subtitle: {
        ...FONTS.h3,
        textAlign: "center",
        color: COLORS.white,
    },
    adviceCard: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        padding: SIZES.padding,
        marginBottom: SIZES.base,
    },
    adviceCardText: {
        ...FONTS.body2,
        color: COLORS.white,
        textAlign: "center",
    },
    adviceExplanationContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        padding: SIZES.padding,
        marginBottom: SIZES.base,
    },
    adviceExplanation: {
        ...FONTS.body2,
        textAlign: "center",
        color: COLORS.white,
    },
    content: {
        alignItems: "center",
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.radius,
        width: "80%",
        alignItems: "center",
        marginBottom: 100,
    },
    buttonText: {
        ...FONTS.body2,
        color: COLORS.white,
    },
});
