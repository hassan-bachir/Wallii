import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
    },
    buttonsContainer: {
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    goBackLink: {
        ...FONTS.body3,
        color: COLORS.white,
        textAlign: "center",
        textDecorationLine: "underline",
        marginTop: 10,
    },
    chooseAdvisorText: {
        ...FONTS.h2,
        color: COLORS.white,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
    },
});
