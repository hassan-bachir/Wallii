import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES.radius,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: SIZES.base,
        marginTop: 10,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
    imageContainer: {
        marginRight: SIZES.padding,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: SIZES.radius,
    },
    imagePlaceholder: {
        width: 100,
        height: 100,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray,
    },
    detailsContainer: {
        flex: 1,
    },
    date: {
        ...FONTS.body3,
        color: COLORS.black,
        marginBottom: SIZES.base,
    },
    categoryContainer: {
        paddingVertical: SIZES.base / 2,
        paddingHorizontal: SIZES.base / 2,
        borderRadius: SIZES.radius,
        marginBottom: SIZES.base,
        overflow: "hidden",
        alignItems: "center",
        width: 105,
    },
    category: {
        ...FONTS.body5,
        color: COLORS.white,
        flexWrap: "nowrap",
        overflow: "hidden",
    },
    amount: {
        ...FONTS.h2,
        color: COLORS.black,
    },
});
