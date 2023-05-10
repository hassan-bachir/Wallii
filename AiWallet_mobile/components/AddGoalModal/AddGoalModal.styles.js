import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

export default styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 35,
        paddingHorizontal: 0,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        height: 40,
        borderBottomColor: COLORS.secondary,
        borderBottomWidth: 1,
        width: "90%",
        borderRadius: 0,
        marginBottom: 30,
        paddingHorizontal: SIZES.padding,
    },
    datePickerButton: {
        width: "90%",
        height: 40,
        borderBottomColor: COLORS.secondary,
        borderBottomWidth: 1,
        marginBottom: 30,
        paddingHorizontal: SIZES.padding,
        justifyContent: "center",
    },
    datePickerButtonText: {
        ...FONTS.body3,
        color: COLORS.black,
    },
    saveButton: {
        width: "90%",
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.radius,
        alignItems: "center",
        marginBottom: 10,
    },
    saveButtonText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    cancelButton: {
        width: "90%",
        backgroundColor: COLORS.secondary,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.radius,
        alignItems: "center",
    },
    cancelButtonText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
});
