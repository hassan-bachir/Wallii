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
    dayContent: {
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    calendarContainer: {
        height: "100%",
    },
});
