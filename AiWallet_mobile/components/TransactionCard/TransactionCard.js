import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const TransactionCard = ({ transaction }) => {
    const { date, category, amount, type, image } = transaction;

    const formattedDate = new Date(date).toISOString().split("T")[0]; // Extract yyyy-mm-dd

    const categoryBackgroundColor =
        type === "income" ? COLORS.primary : COLORS.secondary;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <View style={styles.imagePlaceholder} />
                )}
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.date}>{formattedDate}</Text>
                <View
                    style={[
                        styles.categoryContainer,
                        { backgroundColor: categoryBackgroundColor },
                    ]}
                >
                    <Text style={styles.category}>{category}</Text>
                </View>
                <Text style={styles.amount}>${amount}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        marginBottom: SIZES.base,
    },
    imageContainer: {
        marginRight: SIZES.padding,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: SIZES.radius,
    },
    imagePlaceholder: {
        width: 100,
        height: 150,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray,
    },
    detailsContainer: {
        flex: 1,
    },
    date: {
        ...FONTS.body3,
        color: COLORS.black,
        marginBottom: SIZES.base,
    },
    categoryContainer: {
        padding: SIZES.base,
        borderRadius: SIZES.radius,
        marginBottom: SIZES.base,
    },
    category: {
        ...FONTS.body3,
        color: COLORS.white,
    },
    amount: {
        ...FONTS.h2,
        color: COLORS.black,
    },
});

export default TransactionCard;
