import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centeredContainer: {
        justifyContent: "center",
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
    inputsGroup: {
        marginBottom: SIZES.padding * 2,
        marginTop: SIZES.padding * 2,
    },
    errorMessage: {
        color: COLORS.red,
        ...FONTS.body4,
        textAlign: "center",
        marginTop: SIZES.padding,
    },
});
