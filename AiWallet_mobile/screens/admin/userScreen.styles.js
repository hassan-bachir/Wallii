import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    input: {
        width: "90%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 16,
    },
    submitButton: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    submitButtonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    deleteButton: {
        backgroundColor: "#f44336",
        padding: 10,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    assignAdminButton: {
        backgroundColor: "#FF9800",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    assignAdminButtonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
});
