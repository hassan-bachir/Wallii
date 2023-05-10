import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        marginTop: SIZES.base,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding,
        marginHorizontal: SIZES.padding,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
    },
    labelContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SIZES.base,
        width: "33%",
    },
    labelText: {
        ...FONTS.h4,
        fontWeight: "bold",
    },
    labelTextIncome: {
        ...FONTS.h4,
        fontWeight: "bold",
        color: COLORS.primary,
    },
    labelTextExpense: {
        ...FONTS.h4,
        fontWeight: "bold",
        color: COLORS.secondary,
    },

    numberText: {
        ...FONTS.body2,
    },
    separator: {
        justifyContent: "center",
        alignItems: "center",
        width: 1,
        height: "70%",
        backgroundColor: COLORS.black,
    },
});
