import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const scaleFactor = width / 414; // (iPhone 11 Pro Max)
export default styles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        width: width * 0.4 * scaleFactor,
        borderRadius: 10,
        padding: 10,
    },
    imageContainer: {
        width: 80 * scaleFactor,
        height: 80 * scaleFactor,
        borderRadius: 40 * scaleFactor,
        overflow: "hidden",
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    name: {
        ...FONTS.body3,
        fontSize: 16 * scaleFactor,
        fontWeight: "bold",
        color: COLORS.white,
        fontFamily: FONTS.body3.fontFamily,
    },
});
