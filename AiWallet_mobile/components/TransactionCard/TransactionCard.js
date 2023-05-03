import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const TransactionCard = ({ transaction }) => {
    const { date, category, amount, type, image } = transaction;
    // Extract yyyy-mm-dd
    const formattedDate = new Date(date).toISOString().split("T")[0];

    const categoryBackgroundColor =
        type === "income" ? COLORS.primary : COLORS.secondary;

    return (
        <TouchableOpacity style={styles.container}>
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
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES.radius,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: SIZES.base,
        marginTop: 10,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
    imageContainer: {
        marginRight: SIZES.padding,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: SIZES.radius,
    },
    imagePlaceholder: {
        width: 100,
        height: 100,
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
        paddingVertical: SIZES.base / 2,
        paddingHorizontal: SIZES.base / 2,
        borderRadius: SIZES.radius,
        marginBottom: SIZES.base,
        overflow: "hidden",
        alignItems: "center",
        width: 105,
    },
    category: {
        ...FONTS.body5,
        color: COLORS.white,
        flexWrap: "nowrap",
        overflow: "hidden",
    },
    amount: {
        ...FONTS.h2,
        color: COLORS.black,
    },
});

export default TransactionCard;
