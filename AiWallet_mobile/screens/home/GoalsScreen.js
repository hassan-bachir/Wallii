import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { Background, AddWalletButton, AddGoalModal } from "../../components";
import { ROUTES, FONTS, COLORS, SIZES, IMAGES } from "../../constants";
import { getAllGoals } from "../../api/api";

const Goals = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const fetchedGoals = await getAllGoals();
                setGoals(fetchedGoals);
            } catch (error) {
                console.error("Error fetching goals:", error);
            }
        };

        fetchGoals();
    }, []);

    return (
        <Background image={IMAGES.HOMEBACKGROUND}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>
                    Goals to Help AI Advisor in Decisions!
                </Text>
                <AddWalletButton buttonText="Add Goal +" />
                <FlatList
                    data={goals}
                    renderItem={({ item }) => (
                        <View style={styles.goalCard}>
                            <Text style={styles.goalDescription}>
                                {item.description}
                            </Text>
                            <Text style={styles.goalAmount}>
                                Target Amount: ${item.targetAmount}
                            </Text>
                            <Text style={styles.goalDate}>
                                Target Date: {item.targetDate.split("T")[0]}
                            </Text>
                        </View>
                    )}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={styles.flatListContent}
                />
            </SafeAreaView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        ...FONTS.h3,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
        color: COLORS.white,
    },
    flatListContent: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    goalCard: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },

    goalDescription: {
        ...FONTS.body2,
    },
    goalAmount: {
        ...FONTS.body3,
    },
    goalDate: {
        ...FONTS.body4,
    },
});

export default Goals;
