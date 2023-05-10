import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

export default StyleSheet.create({
    margin: {
        margin: SIZES.padding * 1,
    },
    buttonStyle: {
        height: 45,
        borderRadius: SIZES.radius / 1.5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: COLORS.white,
        ...FONTS.body3,
    },
});
