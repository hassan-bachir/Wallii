import React from "react";
import { View } from "react-native";

const Container = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontSize: 18,
        fontFamily: "Montserrat-medium",
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
});
