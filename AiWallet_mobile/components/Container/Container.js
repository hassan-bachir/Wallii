import React from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

const Container = ({ children, style }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={[styles.container, style]}>{children}</View>
        </TouchableWithoutFeedback>
    );
};

export default Container;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
