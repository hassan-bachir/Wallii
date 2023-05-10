import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    button: {
        marginHorizontal: SIZES.padding,
        marginTop: SIZES.padding,
        width: "40%",
        borderRadius: SIZES.radius,
        padding: SIZES.base,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        ...FONTS.body3,
        color: COLORS.white,
    },
});
