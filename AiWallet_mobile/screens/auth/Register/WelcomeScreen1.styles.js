import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

export default styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    sloganContainer: {
        flex: 1,
        justifyContent: "center",
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 20,
    },
    slogan: {
        ...FONTS.h3,
        color: COLORS.white,
        textAlign: "center",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    loginLink: {
        ...FONTS.body3,
        color: COLORS.white,
        textAlign: "center",
        textDecorationLine: "underline",
        marginTop: 10,
    },
});
