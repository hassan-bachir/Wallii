import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        ...FONTS.h3,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
        color: COLORS.white,
    },
    flatListContent: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    goalCard: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },

    goalDescription: {
        ...FONTS.body2,
    },
    goalAmount: {
        ...FONTS.body3,
    },
    goalDate: {
        ...FONTS.body4,
    },
    goalModalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    goalModalContent: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        padding: 16,
        maxWidth: "80%",
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
    goalModalDescription: {
        ...FONTS.body2,
    },
    goalModalAmount: {
        ...FONTS.body3,
    },
    goalModalDate: {
        ...FONTS.body4,
    },
    deleteButton: {
        backgroundColor: COLORS.red,
        borderRadius: 5,
        padding: 8,
        marginTop: 10,
        marginBottom: 5,
        alignItems: "center",
    },
    deleteButtonText: {
        ...FONTS.body4,
        color: COLORS.white,
    },
    closeButton: {
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        padding: 8,
        marginTop: 5,
        alignItems: "center",
    },
    closeButtonText: {
        ...FONTS.body4,
        color: COLORS.white,
    },
});
