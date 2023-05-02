import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const TransactionCard = ({ transaction }) => {
    const { date, category, amount, type, image } = transaction;

    return (
        <View style={styles.container}>
            {image && (
                <Image
                    source={{ uri: image }}
                    style={styles.transactionImage}
                />
            )}
            <View style={styles.transactionInfo}>
                <Text style={styles.date}>{date}</Text>
                <Text
                    style={[
                        styles.category,
                        {
                            color:
                                type === "income"
                                    ? COLORS.primary
                                    : COLORS.secondary,
                        },
                    ]}
                >
                    {category}
                </Text>
                <Text style={styles.amount}>${amount}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10,
    },
    transactionImage: {
        height: 150,
        width: 100,
        marginRight: 10,
    },
    transactionInfo: {
        flexDirection: "column",
    },
    date: {
        ...FONTS.body3,
    },
    category: {
        ...FONTS.body3,
    },
    amount: {
        ...FONTS.body3,
    },
});

export default TransactionCard;
