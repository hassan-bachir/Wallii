import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import styles from "./TransactionCard.styles";

const TransactionCard = ({ transaction, onPress }) => {
    const { date, category, amount, type, image } = transaction;

    const formattedDate = new Date(date).toISOString().split("T")[0];

    const categoryBackgroundColor =
        type === "income" ? COLORS.primary : COLORS.secondary;

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
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
                <Text style={styles.amount}>${numberWithCommas(amount)}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default TransactionCard;
