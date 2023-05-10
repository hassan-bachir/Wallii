import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    walletCard: {
        marginHorizontal: 10,
        marginTop: 5,
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 10,
    },
    addButton: {
        flex: 1,
        backgroundColor: COLORS.darkgreen,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    deleteButton: {
        flex: 1,
        backgroundColor: COLORS.red,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: "bold",
        textAlign: "center",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 10,
        width: "80%",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        marginBottom: 20,
        height: 40,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    modalButton: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: COLORS.gray,
    },
    saveButton: {
        backgroundColor: COLORS.primary,
    },
});
