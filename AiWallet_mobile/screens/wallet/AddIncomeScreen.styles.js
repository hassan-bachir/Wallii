import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

export default styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    greenSection: {
        height: 200,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: COLORS.primary,
        justifyContent: "space-between",
    },
    whiteSection: {
        flex: 1,
        backgroundColor: COLORS.white,

        paddingHorizontal: 20,
    },
    title: {
        ...FONTS.h1,
        color: COLORS.white,
        marginBottom: 20,
    },
    label: {
        ...FONTS.body3,
        color: COLORS.white,
        marginBottom: 5,
    },
    Amountlabel: {
        ...FONTS.h3,
        color: COLORS.white,
        marginBottom: 5,
    },
    labelBlack: {
        ...FONTS.body3,
        color: COLORS.black,
        marginBottom: 5,
    },

    amountinput: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
        height: 40,
    },
    inputBlack: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
        borderColor: COLORS.gray,
        borderWidth: 1,
        height: 40,
    },
    descriptionInput: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
        borderColor: "black",
        borderWidth: 1,
        height: 80,
    },
    submitButton: {
        backgroundColor: COLORS.darkgreen,
        borderRadius: 5,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    submitButtonText: {
        ...FONTS.body3,
        color: COLORS.white,
    },
    picker: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: 10,

        marginBottom: 20,
        borderColor: COLORS.gray,
        borderWidth: 1,
    },
    disabledButton: {
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
