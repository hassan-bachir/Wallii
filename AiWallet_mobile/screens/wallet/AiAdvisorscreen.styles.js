import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding,
        textAlign: "center",
        justifyContent: "space-between",
    },
    title: {
        ...FONTS.h1,
        marginTop: 30,
        marginBottom: SIZES.base,
        textAlign: "center",
        color: COLORS.white,
    },
    subtitle: {
        ...FONTS.h3,
        textAlign: "center",
        color: COLORS.white,
    },
    adviceCard: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        padding: SIZES.padding,
        marginBottom: SIZES.base,
    },
    adviceCardText: {
        ...FONTS.body2,
        color: COLORS.white,
        textAlign: "center",
    },
    adviceExplanationContainer: {
        // backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        padding: SIZES.padding,
        marginBottom: SIZES.base,
    },
    adviceExplanation: {
        ...FONTS.body2,
        textAlign: "center",
        color: COLORS.white,
    },
    content: {
        alignItems: "center",
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.radius,
        width: "80%",
        alignItems: "center",
        marginBottom: 100,
    },
    buttonText: {
        ...FONTS.body2,
        color: COLORS.white,
    },
});
