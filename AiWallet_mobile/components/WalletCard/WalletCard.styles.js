import { COLORS, FONTS, SIZES } from "../../constants";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        marginBottom: SIZES.base,
        width: "100%",
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        position: "relative",
    },
    topSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftSection: {
        paddingLeft: SIZES.padding,
    },
    walletName: {
        ...FONTS.h3,
        marginBottom: SIZES.base,
    },
    totalDifference: {
        ...FONTS.body3,
        color: COLORS.black,
        marginBottom: SIZES.base,
    },
    amountsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    totalIncome: {
        ...FONTS.body3,
        color: COLORS.primary,
        marginRight: 15,
    },
    totalExpenses: {
        ...FONTS.body3,
        color: COLORS.secondary,
    },
    rightSection: {
        alignItems: "flex-end",
    },

    addButton: {
        backgroundColor: COLORS.secondary,
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: -25,
        right: SIZES.padding,
    },
    addButtonText: {
        ...FONTS.h1,
        color: COLORS.white,
    },
});
