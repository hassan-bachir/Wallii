import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import styles from "./CalenderItem.styles";

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

class CalenderItem extends PureComponent {
    render() {
        const { income, expense } = this.props;
        return (
            <View style={styles.dayContent}>
                <Text style={{ color: COLORS.primary }}>
                    ${numberWithCommas(income)}
                </Text>
                <Text style={{ color: COLORS.secondary }}>
                    ${numberWithCommas(expense)}
                </Text>
            </View>
        );
    }
}

export default CalenderItem;
