import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, ICONS } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        marginTop: SIZES.padding,
    },
    label: {
        color: COLORS.white,
        ...FONTS.body3,
    },
    input: {
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.white,
        ...FONTS.body3,
    },
    eyeIconContainer: {
        position: "absolute",
        right: 0,
        bottom: 10,
        height: 30,
        width: 30,
    },
    eyeIcon: {
        height: 20,
        width: 20,
        tintColor: COLORS.white,
    },
    errorText: {
        color: COLORS.red,
        ...FONTS.body4,
        marginTop: SIZES.base,
    },
});
