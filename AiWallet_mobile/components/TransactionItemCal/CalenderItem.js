import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

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

const styles = StyleSheet.create({
    dayContent: {
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
    },
});

export default CalenderItem;
