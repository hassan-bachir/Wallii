import React from "react";
import { IMAGES } from "../../constants";

import { ImageBackground, StyleSheet } from "react-native";

const Background = ({ children }) => {
    return (
        <ImageBackground source={IMAGES.BACKGROUND} style={styles.background}>
            {children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
    },
});

export default Background;
