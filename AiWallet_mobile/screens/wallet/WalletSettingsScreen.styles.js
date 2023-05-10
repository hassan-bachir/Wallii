import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 150,
    },
    formContainer: {
        marginTop: 30,

        margin: 10,

        justifyContent: "space-between",
        paddingTop: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    walletCard: {
        marginHorizontal: 10,
        marginTop: 5,
    },
    deleteButton: {
        backgroundColor: COLORS.red,
        marginTop: 15,
    },
    labelBlack: {
        ...FONTS.h3,
    },
    descriptionInput: {
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        height: 45,
        color: COLORS.black,
        ...FONTS.body1,
        backgroundColor: "#B2FFFA",
        borderRadius: 3,
        width: "100%",
    },
    inputContainer: {
        alignItems: "center",
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        padding: 10,
        color: COLORS.primary,
        ...FONTS.body3,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        ...FONTS.body2,
        color: COLORS.primary,
        marginBottom: 5,
    },
});
