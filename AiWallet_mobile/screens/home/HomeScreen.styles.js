import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

export default styles = StyleSheet.create({
    Safe: {
        paddingTop: 20,
    },
    header: {
        marginTop: 20,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerText: {
        ...FONTS.h1,
        color: COLORS.white,
    },
    headerText: {
        ...FONTS.h1,
        color: COLORS.white,
    },
    walletList: {
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.base,
    },
    roundButton: {
        flexDirection: "row",
        position: "absolute",
        bottom: 70,
        left: 20,
        borderRadius: 50,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },

    goalButton: {
        ...FONTS.h4,
        color: COLORS.white,
    },
});
