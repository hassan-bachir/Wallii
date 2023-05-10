import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding,
    },
    title: {
        ...FONTS.h3,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
        color: COLORS.primary,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        ...FONTS.body2,
        color: COLORS.primary,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        padding: 10,
        color: COLORS.primary,
        ...FONTS.body3,
    },
});
